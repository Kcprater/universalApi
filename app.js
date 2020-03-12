require('dotenv').config();

//EXPRESS
const express = require('express');
const app = express();

//CONTROLLER IMPORTS
let User = require('./controllers/usercontroller');
let Rating = require('./controllers/ratingcontroller');
// const list = require('./controllers/listcontroller');
const Rider = require('./controllers/riderratingcontroller');

//DB IMPORT & SYNC
const sequelize = require('./db');
sequelize.sync();
app.use(express.json());

//MIDDLEWARE
app.use(require('./middleware/headers'));
app.use('/api/user', User);
app.use(require('./middleware/validate-session'));

//USED ROUTES
app.use('/api/rider', Rider);
app.use('/api/rating', Rating);

//NOT USED ROUTES
// app.use('/api/ridelist', list);

//CONSOLE LOG TO SHOW APP IS LISTENING
app.listen(process.env.PORT, function(){
    console.log(`App is listening on ${process.env.PORT}.`) 
});
