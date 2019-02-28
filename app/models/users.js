var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
    login: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    fname: {
        type: String,
        default: ''
    },
    lname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
});