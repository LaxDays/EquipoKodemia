require ('dotenv').config( );
const express = require('express');
const app = express();
const port = 3002;
const postsRoutes = require ('./src/routes/postsRoutes');
const mongoDB = require('./src/db/db');
const { mongo } = require('mongoose');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/', postsRoutes);
mongoDB.connect.then((message)=>{
    console.log(message);
    app.listen(port, ()=>{
        console.log(`Serving reading in port ${port}`);
    })
}).catch((error)=>{
    console.log(error);
})