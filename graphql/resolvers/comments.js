const { UserInputError, AuthenticationError } = require('apollo-server')
const Post = require('../../models/Post')
const { checkAuth } = require('../../utils/check-auth')
const { getDateTime } = require('../../utils/accessories')

const Query = {

}

const Mutation = {
    createComment: async (_, { postID, body }, { req }) => {
        const { username } = checkAuth(req)
        if (body.trim() === '') {
            throw new UserInputError('Empty comment', {
                errors: {
                    comment: 'Comment cannot be empty'
                }
            })
        }

        const post = await Post.findById(postID)

        if (post) {
            post.comments.unshift({
                body,
                username: username,
                createdAt: getDateTime(),
            })
            await post.save();
            return post
        } throw new UserInputError('Post not found')
    },
    
    deleteComment: async (_ , { postID , commentID } , { req }) => {
        try {
            const { username } = checkAuth(req)
            const post = await Post.findById(postID)
            if (post){
                const commentIndex = post.comments.findIndex(e => e.id === commentID )
                if (commentIndex == -1 ) throw new UserInputError('Invalid commentID')
                if (post.comments[commentIndex].username === username ) {
                    post.comments.splice(commentIndex , 1)
                    await post.save()
                    return post
                } throw new AuthenticationError('This user not allow to manage this comment')
            } throw new UserInputError('Post is not exist!')
        } catch (error) {
            throw new Error(error)
        }
    },
    

    

}

module.exports = {
    Query, Mutation
}
