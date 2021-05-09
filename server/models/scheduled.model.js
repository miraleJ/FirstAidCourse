const mongoose = require('mongoose');
const validator = require('validator');

const sceduledSchema =  mongoose.Schema({
    courseName: { //TODO - need to be from the courses schema
        type: String,
        require: true,
        unique: false,
        trim: true
    },
    course: {
        // TODO - how to do it can have
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        unique: false,
        ref: 'Course'
    },
    place: {
        type: {
            address: {
                type: String,
                require: true,
                unique: false,
                trim: true
            },
            publicArea: {
                type: String,
                require: true,
                unique: true,
                trim: true
            }
        },
        require: true,
        unique: false
    },
    timeOfCourse: {
        type: {
            date: {
                type: String,
                require: false,
                unique: false,
                trim: false,
                validate(value) {
                    // validator.toDate(value); //TODO
                }
            },
            time: {
                type: String,
                require: false,
                unique: false,
                trim: true
                //TODO
            }
        },
        require: true,
        unique: true,
        trim: true
    },
    moreDetailes: {
        type: String,
        require: false,
        unique: false,
        trim: true
    }
})

sceduledSchema.virtual('students', {
    ref: 'User',
    localField: '_id',
    foreignField: 'sceduledCourse'
})

const sceduledModel = mongoose.model("SceduledCourse", sceduledSchema);
module.exports = sceduledModel;