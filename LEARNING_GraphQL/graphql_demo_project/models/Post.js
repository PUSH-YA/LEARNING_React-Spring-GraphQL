const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    // can delete the id field bc mongodb has auto id generation
    id: String,
    title: String,
    author: String
})

module.exports = mongoose.model('Post', Post);