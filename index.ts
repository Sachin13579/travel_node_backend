import app from "./src/app";
// console.log("Starting..")
const startServer = () =>{
    app.listen(8888,()=>{
        console.log("Starting.. server")
    })
}

startServer();