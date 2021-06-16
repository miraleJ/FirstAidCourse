// TODO - not forget the course name and id
const SceduledModel = require('../models/scheduled.model');
var validator = require('validator');

const addSceduled = async (req, res) => {
    const { courseName, place, timeOfCourse, isOnline, moreDetails } = req.body;

    if (false) {//TODO
        // validations - throw error if wrong
        // check the name exist in the course collection
    }
    const Sceduled = new SceduledModel({
        courseName,
        place,
        timeOfCourse,
        isOnline,
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
            return res.status(204).send('There are no Sceduleds yet.');
        }
        res.status(200).send(Sceduleds);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}

const getSceduledById = async (req, res) => {
    const _id = req.params;
    try {
        const sceduled = await SceduledModel.findById(_id);
        if (!sceduled){
            return res.status(404).send();
        }
        res.status(200).send(sceduled);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}


const getSceduledByName = async (req, res) => {
    const cName = req.body.name;
    try {
        const sceduled = await SceduledModel.find({courseName: cName});
        if (sceduled.length === 0){
            return res.status(404).send('There are no Sceduleds matching this name.');
        }
        res.status(200).send(sceduled);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}

//TODO - return by date or by exact time? + how do i get the date?
const getSceduledByDate = async (req, res) => {
    const cName = req.body.date;
    console.log(cDate);
    try {
        const sceduled = await SceduledModel.find({timeOfCourse: cName});
        if (sceduled.length === 0){
            return res.status(404).send('There are no sceduleds matching this time.');
        }
        res.status(200).send(sceduled);
    } catch(e) {
        res.status(500).send(e+" nooooooooo!");
    }
}

const updateSceduled = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['courseName', 'place', 'timeOfCourse', 'moreDetails']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!isValidOperation){
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        const sceduled = await SceduledModel.findById(req.params.id)

        updates.forEach(update => sceduled[update] = req.body[update])
        await sceduled.save()

        if (!sceduled) {
            return res.status(404).send()
        }

        res.send(sceduled)
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteSceduled = async (req, res) => {
    try {
        const sced = await userModel.findByIdAndDelete(req.params.id)

        if (!sced) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.status(500).send()
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
    getSceduledById,
    getSceduledByName,
    getSceduledByDate,
    updateSceduled,
    deleteSceduled,
    // editSceduled,
}
