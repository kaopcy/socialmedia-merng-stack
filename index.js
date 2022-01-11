const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const postTypeDefs = require('./graphql/typeDefs/postTypeDefs');
const userTypeDefs = require('./graphql/typeDefs/userTypeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require("./config.js");


const server = new ApolloServer({
    typeDefs: [ postTypeDefs , userTypeDefs ],
    resolvers,
    context: ({req})=> ({req})
});

const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGODB , { useNewUrlParser: true })
        console.log('MongoDB connected');
        const res = await server.listen({ port: 5000 })
        console.log(`Server running at ${res.url}`);
    } catch (error) {
        console.log(error);
    }

}

connectDB();
