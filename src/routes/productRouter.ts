import {Router}  from 'express';

const productRouter = Router();

productRouter.post("/edituser", (req,res)=>{
    res.send("update success")
})

export default productRouter
