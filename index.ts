import app from "./src/app";
import {config} from './src/config/config'
import connectDb from "./src/config/db";

const startServer = async() =>{

    const port = config.PORT ||8888;
    await connectDb()
    app.listen(port,()=>{
        console.log(`Starting.. serverat : ${port}`);
    })
}

startServer();