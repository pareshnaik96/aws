const express = require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const app = express()
const route = require('./Routes/route.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const multer= require("multer");
const { AppConfig } = require('aws-sdk');
app.use( multer().any())


mongoose.connect('mongodb+srv://pareshnaik:W536yetBeRCk0yL8@cluster0.m9yz9.mongodb.net/aws-DB?retryWrites=true&w=majority',
{
    useNewUrlParser: true
})
.then(()=>console.log('mongoDB is connected'))
.catch(error=>console.log(error.message))

app.use('/',route)


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});