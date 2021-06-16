const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
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
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
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
        required: false,
        unique: false,
        trim: true,
    },
    coursesTaken: {
        type: [{
            sceduledCourse: {
                // type: String,
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                unique: false,
                // ref: 'SceduledCourse'
            },
            didPass: {
                type: Boolean,
                required: true,
                unique: false          
            }
        }],
        default: [],
        required: true,
        unique: false,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'wedontneedmoreeducation')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await userModel.findOne({ email })

    if (!user) {
        throw new Error('unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('unable to login')
    }

    return user
}

// hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    next()
})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;