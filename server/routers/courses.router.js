const express = require('express');
const cRouter = express.Router();
const coursesController = require('../controllers/courses.controller')

cRouter.post('/', (req, res) => {
    console.log(req.body);
    coursesController.addCourse(req, res);
}).put('/', (req, res) => {
    coursesController.editCourse(req,res);
}).get('/', (req, res) => {
    coursesController.getAllCourses(req, res);
}).get('/:name', (req, res) => {
    coursesController.getCourseByName(req, res);
})

module.exports = cRouter;