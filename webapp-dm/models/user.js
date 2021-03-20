const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    default_loc: {
        type: String, 
        required: true
    },
    live_loc: {
        type: String
    },
    affected: {
        type: Boolean,
        default: false
    },
    affected_verify: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', UserSchema);