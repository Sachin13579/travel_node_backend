import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"))


app.get('/api/healthCheck',(req,res)=>{
    res.json({
        status:true,
        message:"Server is healthy and running."
    })
})


export default app;