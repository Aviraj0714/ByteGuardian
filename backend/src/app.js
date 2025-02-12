const express=require('express');
const app=express()
const dotenv=require('dotenv');

app.get('/',(req,res)=>{
    res.send('Hello World');
})

module.exports=app;