const mongoose = require('mongoose');
const validator = require('validator');

const sceduledSchema =  mongoose.Schema({
    courseName: { //TODO - need to be from the courses scema
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    course: {
        // TODO - how to do it can have
        type: mongoose.Schema.Types.ObjectId,
        require: false,
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
        require: false,
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

const sceduledModel = mongoose.model("SceduledCourse", sceduledSchema);
module.exports = sceduledModel;