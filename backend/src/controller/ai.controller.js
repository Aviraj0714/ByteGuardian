const aiservice=require('../services/ai.service');

module.exports.getReview=async(req,res)=>{
    const code=req.body.code;
    if(!code){
return res.status(400).send({
    message:'Prompt is required'
})

    }
    const result=await aiservice(code);
    res.send(result);
}