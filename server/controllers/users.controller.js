const userModel = require('../models/user.model');
var validator = require('validator');
const { findByIdAndUpdate } = require('../models/user.model');

const addUser = async (req, res) => {
    const { email, name, password, userType } = req.body;

    await userModel.syncIndexes();

    if (false) {//TODO
        // validations - throw error if wrong
    }
    const user = new userModel({
        email,
        name,
        password,
        userType,
        // TODO courseTaken - the array of courses and if passed
    });

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token});
    } catch (error) {
        res.status(400).send(error);
    }
}

const login = async (req, res) => {
    try {
        const user = await userModel.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (error) {
        res.status(400).send()
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length === 0){
            return res.status(204).send('There are no users yet.');
        }
        res.status(200).send(users);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}

const getUserByMail = async (req, res) => {
    const email = req.body.email;
    // if (!validator.isMail(email)) { //TODO
    //     res.status(500).send("The mail is not valid");
    // }
    try {
        // TODO to lowercase
        const user = await userModel.findOne({email: email});
        if (!user){
            return res.status(404).send('There are no users matching this mail.');
        }
        res.status(200).send(user);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}

const getUserByName= async (req, res) => {
    const name = req.params.name;
    try {
        // TODO to lowercase
        const user = await userModel.find({name: name});
        if (user.length === 0){
            return res.status(404).send('There are no users matching this name.');
        }
        res.status(200).send(user);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}

const updateUser = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'userType']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await userModel.findById(req.params.id)

        updates.forEach(update => user[update] = req.body[update])
        await user.save()
        
        // const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new : true, runValidators : true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
}

module.exports = {
    addUser,
    login,
    getAllUsers,
    getUserByMail,
    getUserByName,
    updateUser,
    deleteUser,
}
