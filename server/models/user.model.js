const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs')

const userSchema =  mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Mail not valid');
            }
        }
    },
    name: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: false
    },
    userType: {
        type: String,
        enum : ['interested','registered','admin'],
        default: 'interested',
        require: false,
        unique: false,
        trim: true,
    }
})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;