// express app
const express = require('express');
var app = express();
const schema = require('./schema/model');
const {graphqlHTTP} = require('express-graphql');

//load env var
const dotenv = require('dotenv');
dotenv.config();

// start local server
var port = 4021;

// mongodb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log("Connected to mongoDB database");
});

app.get('/', function(req, res){
    res.send("Welcome to GraphQL app")
});


// Define endpoint for GraphQL
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// start server
app.listen(port, () => {
    console.log(`Example running on port ${port}`)
})