const courseModel = require('../models/courses.model');
var validator = require('validator');

const addCourse = async (req, res) => {
    const { courseName, length, price, description, isPublished } = req.body;

    if (false) {//TODO
        // validations - throw error if wrong
    }
    const course = new courseModel({
        courseName,
        length,
        price,
        description,
        isPublished
    });

    try {
        await course.save()
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAllCourses = async (req, res) => {
    try {
        const courses = await courseModel.find();
        if (courses.length === 0){
            //TODO - return status
            return res.status(204).send('There are no courses yet.');
        }
        res.status(200).send(courses);
    } catch(e) {
        res.status(404).send(e+" nooooooooo!");
    }
}

const getCourseByName = async (req, res) => {
    const cName = req.params.name;
    console.log(cName);
    try {
        const course = await courseModel.find({courseName: cName});
        if (course.length === 0){
            //TODO - return status
            return res.status(204).send('There are no courses matching this name.');
        }
        res.status(200).send(course);
    } catch(e) {
        res.status(404).send(e+" nooooooooo!");
    }
}

// const editCourse = async (req, res) => {
//     const { courseName, length, price } = req.body;

//     if (false) {//TODO
//         // validations - throw error if wrong
//     }
//     const course = new courseModel({
//         courseName,
//         length,
//         price,
//         isPublished : true
//     });
// }

module.exports = {
    addCourse,
    getAllCourses,
    getCourseByName,
    // editCourse,
}
