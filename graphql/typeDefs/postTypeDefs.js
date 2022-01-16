const { gql } = require("graphql-tag");
const typeDefs = gql`
    type Comment {
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }
    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }
    type Post {
        id: ID!
        user: ID
        body: String!
        createdAt: String!
        username: String!
        comments: [Comment]
        likes: [Like]
        likeCount: Int!
        commentCount: Int!
    }
    type Subscription {
        newPost: Post!
        
    }
    

    type Query {
        getPost(postID: ID!): Post
        getPosts: [Post]
        getPostsByUserID(userID: ID , username: String): [Post]
    }

    type Mutation {
        createPost(body: String!): Post!
        deletePost(postID: ID!): String!
        createComment(postID: ID! , body: String!): Post!
        deleteComment(postID: ID! , commentID: ID!): Post!
        likePost(postID: ID!): Post!
    }

`;

module.exports = typeDefs;
