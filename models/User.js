// model for user and admin

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Member'], default: 'Member' },
});
module.exports = mongoose.model('User', userSchema);