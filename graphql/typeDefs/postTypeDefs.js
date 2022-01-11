const { gql } = require("graphql-tag");
const typeDefs = gql`
    type Post {
        id: ID!
        user: ID
        body: String!
        createdAt: String!
        username: String!
    }

    type Query {
        getPost(postID: ID!): Post
        getPosts: [Post]
        getPostsByUserID(userID: ID , username: String): [Post]
    }

    type Mutation {
        createPost(body: String!): Post!
        deletePost(postID: ID!): String!
    }

`;

module.exports = typeDefs;
