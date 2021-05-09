// TODO - not forget the course name and id
const SceduledModel = require('../models/scheduled.model');
var validator = require('validator');

const addSceduled = async (req, res) => {
    const { sceduledName, place } = req.body; //TODO???

    if (false) {//TODO
        // validations - throw error if wrong
        // check the name exist in the course collection
    }
    const Sceduled = new SceduledModel({
        SceduledName, //TODO???
        // course: req.course._id, //TODO - do course is the right word???
        place,
        timeOfCourse,
        moreDetails
    });

    try {
        await Sceduled.save()
        res.status(201).send(Sceduled);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAllSceduleds = async (req, res) => {
    try {
        const Sceduleds = await SceduledModel.find();
        if (Sceduleds.length === 0){
            //TODO - return status
            return res.status(200).send('There are no Sceduleds yet.');
        }
        res.status(201).send(Sceduleds);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}

const getSceduledByName = async (req, res) => {
    const cName = req.params.name;
    console.log(cName);
    try {
        const Sceduled = await SceduledModel.find({SceduledName: cName});
        if (Sceduled.length === 0){
            //TODO - return status
            return res.status(200).send('There are no Sceduleds matching this name.');
        }
        res.status(201).send(Sceduled);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}

// const editSceduled = async (req, res) => {
//     const { SceduledName, length, price } = req.body;

//     if (false) {//TODO
//         // validations - throw error if wrong
//     }
//     const Sceduled = new SceduledModel({
//         SceduledName,
//         length,
//         price,
//         isPublished : true
//     });
// }

module.exports = {
    addSceduled,
    getAllSceduleds,
    getSceduledByName,
    // editSceduled,
}
