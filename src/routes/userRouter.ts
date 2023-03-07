import {Router}  from 'express';


const userRouter = Router();

userRouter.get("/getuser",(req,res)=>{
    res.send("getUser successfully")
    
})
userRouter.post("/adduser",(req,res)=>{
    res.send("adduser successfully")
})




export default userRouter
