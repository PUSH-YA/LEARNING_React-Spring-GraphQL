const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Author = new Schema({
    // can delete the id field bc mongodb has auto id generation
    id: String,
    name: String,
    description: String
})

module.exports = mongoose.model('Author', Author);