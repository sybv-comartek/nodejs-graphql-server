export function users (sequelize:any, DataTypes:any) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		fullname: {
			type: DataTypes.STRING(256),
			allowNull: false
        },
		phone: {
			type: DataTypes.INTEGER(11)	,
			allowNull: false
        },
		role: {
			type: DataTypes.STRING(256),
			allowNull: false
        },
		tokenId: {
			type: DataTypes.STRING(256),
			allowNull: false
        },
	}, {
		tableName: 'users',
		timestamps: false
	});
};