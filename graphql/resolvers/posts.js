const Post = require("../../models/Post");
const { checkAuth } = require("../../utils/check-auth")

module.exports = {
    Query: {
        getPosts: async () => {
            try {
                const posts = await Post.find();
                return posts;
            } catch (error) {
                throw new Error(error);
            }
        },

        getPost: async(_, { postID })=>{
            try {
                const post = await Post.findById(postID);
                if (post) return post;
                throw new Error("Post not found");
            } catch (error) {
                throw new Error(error);
            }
        },
    },
    Mutations: {
        createPost: async (_, { body } , { req })=>{
            const user = checkAuth(req)

            const newPost = new Post({
                body,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            });
            
            const post = await newPost.save();

            return post
        }
    },
};
