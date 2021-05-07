const mongoose = require('mongoose');

const courseSchema =  mongoose.Schema({
    courseName: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        maxLength: 80
    },
    length: {
        type: Number,
        require: true,
        unique: false,
    },
    price: {
        type: Number,
        require: true,
        unique: false
    },
    description: {
        type: String,
        require: false,
        unique: false,
        // maxLength: 
    },
    isActive: {
        type: Boolean,
        require: true,
        unique: false,
        default: true
    }
})

const courseModel = mongoose.model("Course", courseSchema);
module.exports = courseModel;