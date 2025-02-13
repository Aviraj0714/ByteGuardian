const express=require('express');
const app=express()
const airoutes=require('./routes/ai.routes');
const dotenv=require('dotenv');
const cors =require('cors');
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/ai',airoutes);

module.exports=app;