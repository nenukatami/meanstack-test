var mongoose = require('mongoose');

module.exports = mongoose.model('courses', {
    code: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    launch: {
        type: String,
        default: ''
    },
    users: {
        type: Array,
        default: ''
    }
});