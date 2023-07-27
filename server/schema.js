const {buildSchema} = require("graphql/utilities");

const schema = buildSchema(`
    
    type User {
        id: ID,
        name: String,
        age: Int,
        posts: [Post]
    }
    type Post {
        id: ID,
        title: String,
        content: String
    }
    
    input UserInput {
        id: ID,
        name: String!,
        age: Int!,
        posts: [PostInput]
    }
    input PostInput {
        id: ID,
        title: String!,
        content: String!
    }
    
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }
`);

module.exports = schema;