import userRouter from "./userRouter";
import productRouter from "./productRouter";


export default function routesApp(app : any){
 app.use("/api-user", productRouter)
 
}