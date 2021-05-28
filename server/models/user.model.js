const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs')

const userSchema =  mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Mail not valid');
            }
        }
    },
    name: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        unique: false,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error('The password is not strong enough! It should contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol');
            }
        }
    },
    userType: {
        type: String,
        enum : ['interested','registered','admin'],
        default: 'interested',
        require: false,
        unique: false,
        trim: true,
    },
    coursesTaken: {
        type: [{
            sceduledCourse: {
                type: String,
                // type: mongoose.Schema.Types.ObjectId,
                require: false,
                unique: false,
                // ref: 'SceduledCourse'
            },
            didPass: {
                type: Boolean,
                require: true,
                unique: false          
            }
        }],
        default: [],
        require: true,
        unique: false,
    }
})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;