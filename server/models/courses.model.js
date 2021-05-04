const mongoose = require('mongoose');

const courseSchema =  mongoose.Schema({
    courseName: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    length: {
        type: Number,
        require: true,
        unique: false,
    }
})

const courseModel = mongoose.model("Course", courseSchema);
module.exports = courseModel;