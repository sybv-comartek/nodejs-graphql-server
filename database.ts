'use strict';
import {users} from './src/models/users';
import * as sequelize from 'sequelize'
var db:any = {}
const dbConfig = new sequelize.Sequelize( 
  (process.env.DB_NAME||''),  
  (process.env.DB_USER||''), 
  (process.env.DB_PASS||''), 
  {
    host: process.env.DB_HOST||'',
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    define: {
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: false||undefined,
})

let models = [
    users
]

// Khởi tạo models
models.forEach(model => {
    const seqModel = model(dbConfig, sequelize.Sequelize)
    db[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.sequelize = sequelize

export default db;