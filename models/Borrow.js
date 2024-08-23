// model for borrow status
const mongoose = require('mongoose')

const borrowSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    borrowDate: { type: Date, required: true },
    returnDate: { type: Date },
});
module.exports = mongoose.model('Borrow', borrowSchema);