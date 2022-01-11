const { gql } = require("graphql-tag");

const typeDefs = gql`
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
        firstname: String!
        lastname: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
        firstname: String!
        lastname: String!
    }
    input LoginInput {
        username: String!
        password: String!
    }

    type Query {
        getAllUsers: [User]
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(loginInput: LoginInput): User!
    }
`;

module.exports = typeDefs;
