// model for book
const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    ISBN: { type: String, required: true, unique: true, },
    publicationDate: { type: Date, required: true },
    genre: { type: String, required: true },
    numberOfCopies: { type: Number, required: true },
    borrowedCount: { type: Number, default: 0, },
});
module.exports = mongoose.model('User', bookSchema);
