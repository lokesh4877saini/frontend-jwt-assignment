const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User' 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;