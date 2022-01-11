const { gql } = require('graphql-tag')

// Similar to typescript ( add ! to mark them as required )
const typeDefs = gql`
# //* Model type
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
        firstname: String!
        lastname: String!
    }

# //* Input type
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
        firstname: String!
        lastname: String!
    }
    input LoginInput{
        username: String!
        password: String!
    }
    
# //* Query and Mutation
# similar to typescript this mean it take RegisterInput and need to return User 

    type Query {
        getPost(postID: ID!): Post
        getPosts: [Post]
        getAllUsers: [User]
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(loginInput: LoginInput): User!

        createPost(body: String!): Post!
        deletePost(postID: ID!): String!
    }
`;

module.exports = typeDefs