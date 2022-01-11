const { model , Schema } = require('mongoose')

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    firstname: String,
    lastname: String,
});

/*
    * The first arguments of model take Model name ,
    * so mongoose will modify this name to plural form and lowercase .
    * For example, Post will be posts collection 
*/

module.exports = model('User' , userSchema);