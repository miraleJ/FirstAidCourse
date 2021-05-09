const express = require('express');
const cRouter = express.Router();
const coursesController = require('../controllers/courses.controller')

cRouter.post('/', (req, res) => {
    coursesController.addCourse(req, res);
}).get('/', (req, res) => {
    coursesController.getAllCourses(req, res);
}).get('/:name', (req, res) => {
    coursesController.getCourseByName(req, res);
})
//TODO - get course by part of the name
// .put('/', (req, res) => { //TODO
//     coursesController.editCourse(req,res);
// })

module.exports = cRouter;