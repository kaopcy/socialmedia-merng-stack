const { AuthenticationError } = require("apollo-server");
const User = require("../../models/User");
const Post = require("../../models/Post");
const { checkAuth } = require("../../utils/check-auth");
const { getDateTime } = require("../../utils/accessories");
const { Types } = require('mongoose')
module.exports = {
    Query: {
        getPosts: async () => {
            try {
                const posts = await Post.find().sort({ createdAt: "desc" });
                return posts;
            } catch (error) {
                throw new Error(error);
            }
        },

        getPost: async (_, { postID }) => {
            try {
                const post = await Post.findById(postID);
                if (post) return post;
                throw new Error("Post not found");
            } catch (error) {
                throw new Error(error);
            }
        },

        getPostsByUserID: async (_, { userID, username }) => {
            try {
                var posts = null;
                if (userID) posts = await Post.find({ user: userID });
                if (username) posts = await Post.find({ username: username });
                if (!posts) throw new Error("Post or User not exist");
                return posts;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
    Mutations: {
        createPost: async (_, { body }, { req }) => {
            try {
                const user = checkAuth(req);
                const newPost = new Post({
                    body,
                    user: user.id,
                    username: user.username,
                    createdAt: getDateTime(),
                });

                const post = await newPost.save();
                return post;
            } catch (error) {
                throw new Error(error);
            }
        },

        deletePost: async (_, { postID }, { req }) => {
            const user = checkAuth(req);
            try {
                const post = await Post.findById(postID);
                if (!post) throw new Error("Post not exist");
                if (user.id == post.user) {
                    await post.delete();
                    return "Post deleted succesfully";
                }
                throw new AuthenticationError("User not match this post");
            } catch (error) {
                throw new Error(error);
            }
        },
    },
};
