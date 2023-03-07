import express from "express";
import dotenv from "dotenv";
import routesApp from "./routes";

const app = express();
app.use(express.json());
dotenv.config();


// midleware

//routes
routesApp(app)

app.delete("/removeuser",(req,res)=>{
    
})







const port = process.env.PORT;
app.listen(port, () => {
  console.log("Application run port : ", port);
});
