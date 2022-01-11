const { model , Schema } = require('mongoose')

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String,
        }
    ],
    like: [
        {
            username: String,
            createdAt: String,
        }
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

/*
    * The first arguments of model take Model name ,
    * so mongoose will modify this name to plural form and lowercase .
    * For example, Post will be posts collection 
*/

module.exports = model('Post' , postSchema);