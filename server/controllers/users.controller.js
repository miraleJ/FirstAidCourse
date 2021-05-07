const userModel = require('../models/user.model');
var validator = require('validator');

const addUser = async (req, res) => {
    const { email, name, password, userType } = req.body;

    if (false) {//TODO
        // validations - throw error if wrong
    }
    const user = new userModel({
        email,
        name,
        password,
        userType
    });

    try {
        await user.save()
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length === 0){
            //TODO - return status
            return res.status(200).send('There are no users yet.');
        }
        res.status(201).send(users);
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
        const user = await userModel.find({email: email});
        if (user.length === 0){
            //TODO - return status
            return res.status(200).send('There are no users matching this mail.');
        }
        res.status(201).send(user);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
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
//         isActive : true
//     });
// }

module.exports = {
    addUser,
    getAllUsers,
    getUserByMail,
    // editCourse,
}
