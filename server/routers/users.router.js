const express = require('express');
const uRouter = express.Router();
const usersController = require('../controllers/users.controller')

uRouter.post('/', (req, res) => {
    usersController.addUser(req, res);
}).get('/', (req, res) => {
    usersController.getAllUsers(req, res);
}).get('/email', (req, res) => {
    usersController.getUserByMail(req, res);
}).get('/:name', (req, res) => {
    usersController.getUserByName(req, res);
})
//TODO - get User by part of the name
// .put('/', (req, res) => { //TODO
//     UsersController.editUser(req,res);
// })

module.exports = uRouter;