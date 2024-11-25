import express, { Request, Response } from "express"
import userRouter from "./module/user/user.router";
import tourRouter from "./module/user/tour/tour.route";

const app = express();

//middleware ata use route k bola dai ja jeson data dila ta resived koro..
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/tour',tourRouter)

//ata akta meddlware ata server runn hossa tar respons ta pattassa apadoto
app.get('/',(req:Request,res:Response)=>{
    res.send({
        status:true,
        message:"Server Is Running Port 5000"
        })
})


export default app;