const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const coursesRouter = require('./server/routers/courses.router')
const usersRouter = require('./server/routers/users.router')
const sceduledRouter = require('./server/routers/sceduled.router')

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRouter);
app.use('/api/sceduled', sceduledRouter);

const port = 5000;

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const server =
  "mongodb+srv://dba:svtxhx@firstaid.oj0dp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("database connected");
  });

app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});

const jwt = require('jsonwebtoken')

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'wedontneednoeducation')
  console.log(token);

  const data = jwt.verify(token, 'wedontneednoeducation')
  console.log(data);
}

myFunction()