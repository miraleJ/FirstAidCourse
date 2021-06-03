const express = require('express');
const sRouter = express.Router();
const sceduledController = require('../controllers/sceduled.controller')

sRouter.post('/', (req, res) => {
    sceduledController.addSceduled(req, res);
}).get('/', (req, res) => {
    sceduledController.getAllSceduled(req, res);
}).get('/id/:id', (req, res) => {
    sceduledController.getSceduledById(req, res);
}).get('/name/:courseName', (req, res) => {
    sceduledController.getSceduledByCourseName(req, res);
}).get('/date', (req, res) => {
    sceduledController.getSceduledByDate(req, res);
}).patch('/:id', (req, res) => {
    sceduledController.updateSceduled(req, res);
})
//TODO - get course by part of the name
// .put('/', (req, res) => { /TODO
//     sceduledController.editSceduled(req,res);
// })

module.exports = sRouter;