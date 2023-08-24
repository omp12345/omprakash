// server.js (entry point)

const express = require('express');
const {connection} =require("./db")

const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());



// const userRoutes = require('./routes/user.routes');

const { userRoutes } = require('./routes/user.routes');
const { BlogRouter } = require('./routes/blog.routes');

app.use('/api', userRoutes);
app.use('/api', BlogRouter);

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connect to the DB");
        console.log(` running at port ${process.env.port}`);
    }catch(err){
        console.log(err);
        console.log("Some Error");
    }
})