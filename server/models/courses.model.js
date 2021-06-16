const mongoose = require('mongoose');

const courseSchema =  mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 80
    },
    length: {
        type: Number,
        required: true,
        unique: false,
    },
    price: {
        type: Number,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        // maxLength: 
    },
    isPublished: {
        type: Boolean,
        required: true,
        unique: false,
        default: true
    },
})

courseSchema.virtual('sceduled', {
    ref: 'SceduledCourse',
    localField: '_id',
    foreignField: 'course'
})

const courseModel = mongoose.model("Course", courseSchema);
module.exports = courseModel;