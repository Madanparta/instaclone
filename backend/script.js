const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
dotenv.config();
const PORT = process.env.PORT || 5000;
const userRouter = require('./routing/userRouter');

connectDB() //mongodb connecting..

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("welcome");
})

app.get('/api/post',userRouter);

app.listen(PORT,()=>console.log(`backend server runned with ${PORT}..`))