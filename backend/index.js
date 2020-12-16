const express= require('express')
const morgan =require('morgan')
const dotenv = require('dotenv')
const connecttodb =require('./config/db')
const bodyParser=require('body-parser')
const app =express()

app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
    extended:true
}))
dotenv.config({
    path: './config/config.env'
  });
  
connecttodb();
app.use('/',require('./routes/user'));



const port = process.env.port ||3000;
app.listen
(port,console.log('server running on port:3000'))