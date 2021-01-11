import {gql} from 'apollo-server-express';
import db from '../../../database';
export const typeDefs = gql`
type Query {
    users: [Users]
    user(id: ID!): Users
}
type Users {
    id: ID!
    email: String
    password: String
    fullname: String
    phone: String
    role: String
    tokenId: String
},
`;
export const resolvers ={
    Query: {
        users: async () => db.users.findAll(),
        user: async (obj:any, args:any, context:any, info:any) =>
          db.users.findByPk(args.id),
    },
}
