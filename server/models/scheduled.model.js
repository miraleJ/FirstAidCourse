const mongoose = require('mongoose');

const sceduledSchema =  mongoose.Schema({
    courseName: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    length: {
        type: Number,
        require: true,
        unique: false
    },
    price: {
        type: Number,
        require: true,
        unique: false
    }
})

const sceduledModel = mongoose.model("SceduledCourse", sceduledSchema);
module.exports = sceduledModel;