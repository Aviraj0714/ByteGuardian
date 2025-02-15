const express=require('express');
const app=express()
const airoutes=require('./routes/ai.routes');
const dotenv=require('dotenv');
const cors =require('cors');
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send(
        `
        <h1>Byte Guardian</h1>
        <h2>AI Reviewer</h2>
        <p>Send a POST request to /ai/get-review with code in the body to get a review.</p>
        `
    );
})

app.use('/ai',airoutes);

module.exports=app;