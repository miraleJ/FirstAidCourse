const courseModel = require('../models/courses.model');
var validator = require('validator');

const addCourse = async (req, res) => {
    const { courseName, length, price } = req.body;

    if (false) {//TODO
        // validations - throw error if wrong
    }
    const course = new courseModel({
        courseName,
        length,
        price,
        isActive : true
    });

    try {
        await course.save()
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
}

const editCourse = async (req, res) => {
    console.log(req.body);
    const { courseName, length, price } = req.body;

    if (false) {//TODO
        // validations - throw error if wrong
    }
    const course = new courseModel({
        courseName,
        length,
        price,
        isActive : true
    });

    try {
        await course.save()
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
}
// const depositing = async (req,res) =>{
//     if((req.body.amount) > 0){
//         try{
//             const id= req.params.id;
//             const user = await userModel.findOneAndUpdate({"passportId":id},{$inc: { "accountDetails.cash": req.body.amount }},{new:true, runValidators:true});
//             if(!user){
//                 return res.status(400).send('User not found');
//             }
//             else{
//             const transaction = new transactionsModel({
//                 passportId:id,
//                 transactionType:"Depositing",
//                 amount:req.body.amount,
//             });
//             const result = await transaction.save();
//             res.status(200).json({ user: user, transaction: result });
//         }
//         }catch(e){
//             res.status(400).send(e);
//         }
//     }  
//     else{
//         return res.status(400).send('Bad request, Negative amount is not allowed');
//     }
// }
//---------------------------------
// cRouter.post('/', (req, res) => {
//     coursesController.addCourse(req, res);
// }).put('/', (req, res) => {
//     coursesController.editCourse(req,res);
// }).get('/', (req, res) => {
//     coursesController.getAllCourses(req, res);
// }).get('/:name', (req, res) => {
//     coursesController.getCourseByName(req, res);
// })---------------------------------------


// const addAccount = async (req, res)=>{
//     // const {email} = req.params;
//     let { email, name, id, credit, cash, password } = req.body;

//     //////////////////////////res.status(400).send(err);

//     if (!validator.isEmail(email)) {
//         // mail invalid
//         return res.status(200).json({error: 'mail is not valid'});
//     } else if (id.length != 9 || !validator.isInt(id, {allow_leading_zeroes: true})) {
//         // id length not corect || is not num
//         return res.status(200).json({error: 'id is not valid'});
//     } else if (isNaN(credit) || (credit < 0)) {
//         // credit is negative or not number
//         return res.status(200).json({error: 'credit not valid'});
//     } else if (isNaN(cash)) {
//         // cash is not number
//         return res.status(200).json({error: 'cash not valid'});
//     } else if (cash < -credit) {
//         // cash is under credit
//         return res.status(200).json({error: 'cash is under credit'});
//     } // TODO add password validation

//     const account = new accountsModel({
//         email,
//         name,
//         id,
//         credit,
//         cash,
//         password
//     });

//     try {
//         await account.save()
//         res.status(201).send(user);
//     } catch (error) {
//         res.status(400).send(error);
//     }
        
// }

// const cashChange = (clientId, amount, res) => {
//     // if id not valid
//     if (!/^[0-9]{9}$/.test(clientId)) {
//         // id invalid
//         return res.status(200).json({error: 'ID is not valid'});
//     } else if (isNaN(amount)) {
//         // if amount of money not valid
//         return res.status(200).json({error: 'cash not valid'});
//     } else {
//         try {
//             fs.readFile('./clients.json', (err, data) => {
//                 data = JSON.parse(data);
//                 // try finding the id
//                 const clientI = data.findIndex(c => c.id == clientId);
//                 // if id does not exist
//                 if (clientI === -1) {
//                     return res.status(200).json({error: 'ID not found!'});
//                 } else if (data[clientI].cash + amount < -data[clientI].credit) {
//                     // if after reducing it is under credit
//                     return res.status(200).json({error: 'You spend too much, it is under credit! The transaction have not done!'});
//                 } else {
//                     // else - make the cash change
//                     data[clientI].cash = data[clientI].cash + amount;
//                     try{
//                         fs.writeFileSync('./clients.json', JSON.stringify(data));
//                         return res.status(200).json({success: 'The account was updated'});
//                     }catch(err){
//                         console.error(err);
//                         res.status(500).send('Internal Server Error');
//                     }
//                 }
//             } )
//         }catch (err) {
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//         }
//     }
// }

// const deposit = (req, res) => {
//     cashChange(req.params.clientId, req.body.amount, res);
// }

// const creditUpdate = (req, res) => {
//     const clientId = req.params.clientId;
//     // if id not valid
//     if (!/^[0-9]{9}$/.test(clientId)) {
//         // id invalid
//         return res.status(200).json({error: 'ID is not valid'});
//     } else if (isNaN(req.body.credit) || req.body.credit < 0) {
//         // if new credit not valid
//         return res.status(200).json({error: 'new credit not valid'});
//     } else {
//         try {
//             fs.readFile('./clients.json', (err, data) => {
//                 data = JSON.parse(data);
//                 // try finding the id
//                 const clientI = data.findIndex(c => c.id == clientId);
//                 // if id does not exist
//                 if (clientI === -1) {
//                     return res.status(200).json({error: 'ID not found!'});
//                 } else {
//                     // TODO what happend if the new credit is too small for the cash in the bank?
//                     // else - make the credit change
//                     data[clientI].credit = req.body.credit;
//                     try{
//                         fs.writeFileSync('./clients.json', JSON.stringify(data));
//                         return res.status(200).json({success: 'The account was updated'});
//                     }catch(err){
//                         console.error(err);
//                         res.status(500).send('Internal Server Error');
//                     }
//                 }
//             } )
//         }catch (err) {
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//         }
//     }
// }

// const withdraw = (req, res) => {
//     cashChange(req.params.clientId, -req.body.amount, res);
// }

// const transfer = (req, res) => {
//     // if id not valid
//     if (!/^[0-9]{9}$/.test(req.body.id1) || !/^[0-9]{9}$/.test(req.body.id2)) {
//         // id invalid
//         return res.status(200).json({error: 'there is an unvalid ID'});
//     } else if (isNaN(req.body.amount) || req.body.amount <= 0) {
//         // if amount of money not valid
//         return res.status(200).json({error: 'amount not valid'});
//     } else {
//         try {
//             fs.readFile('./clients.json', (err, data) => {
//                 const clientId1 = req.body.id1;
//                 const clientId2 = req.body.id2;
//                 data = JSON.parse(data);
//                 // finding the ids
//                 const clientI1 = data.findIndex(c => c.id == clientId1);
//                 const clientI2 = data.findIndex(c => c.id == clientId2);
//                 // if there is an unfound id
//                 if (clientI1 === -1 || clientI2 === -1) {
//                     return res.status(200).json({error: 'an ID not found!'});
//                 } else if (data[clientI1].cash - req.body.amount < -data[clientI1].credit) {
//                     // if after reducing it is under credit
//                     return res.status(200).json({error: 'You spend too much, it is under credit! The transaction have not done!'});
//                 } else {
//                     // else - make the cash change
//                     data[clientI1].cash = data[clientI1].cash - req.body.amount;
//                     data[clientI2].cash = data[clientI2].cash + req.body.amount;
//                     try{
//                         fs.writeFileSync('./clients.json', JSON.stringify(data));
//                         return res.status(200).json({success: 'The accounts was updated'});
//                     }catch(err){
//                         console.error(err);
//                         res.status(500).send('Internal Server Error');
//                     }
//                 }
//             } )
//         }catch (err) {
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//         }
//     }
// }

// const detailsOfUser = (req, res) => {
//     // if id not valid
//     const clientId = req.params.clientId;
//     if (!/^[0-9]{9}$/.test(clientId)) {
//         // id invalid
//         return res.status(200).json({error: 'unvalid ID'});
//     } else {
//         try {
//             fs.readFile('./clients.json', (err, data) => {
//                 data = JSON.parse(data);
//                 const clientI = data.findIndex(c => c.id == clientId);
//                 // if the id is unfound
//                 if (clientI === -1) {
//                     return res.status(200).json({error: 'the ID was not found!'});
//                 } else {
//                     // else - show the client
//                     return res.status(200).json(data[clientI]);
//                 }
//             } )
//         }catch (err) {
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//         }
//     }
// }

// const getAllClients = (req, res) => {
//     // if id not valid
//     try {
//         fs.readFile('./clients.json', (err, data) => {
//             data = JSON.parse(data);
//             return res.status(200).json(data);
//         } )
//     }catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// }

// // const getWorkers = (req,res)=>{
// //     return res.send(workers);
// // }

// // const getWorkersArray = (req,res)=>{
// //     return workers;
// // }

// // const asf =()=>{
// //    const x=   getWorkerById(10);
// //     const y=   getWorkerById(17);
// //     x.roomid = y.roomid;
// // }
// // const getWorkerById = (req,res)=>{
// //     const {workerId,isActive} = req.params;
// //     let worker = workers.find((w)=>{
// //         return w.id ==workerId
// //     })
// //     return worker
// // }



module.exports = {
    addCourse,
    editCourse,
}
