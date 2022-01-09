const { AuthenticationError } = require('apollo-server')

const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')
const checkAuth = (req)=>{
    const authHeader = req.headers.authorization
    if (authHeader){
        const token = authHeader.split('Bearer ')[1]
        if(token) {
            try {
                const user = jwt.verify(token , SECRET_KEY);
                return user
            } catch (error) {
                throw new AuthenticationError('Invalid/Expire token');
            }
        }
        throw new Error('JWT missing')
    }
    throw new Error('Authentication must be provided')
}

module.exports = {
    checkAuth
}