const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 6,
            max: 255
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 255,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 1024
        },
        // role 1 : super admin, 2 : admin, 3 : user
        role: {
            type: Number,
            default: 3
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
