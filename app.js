const express = require("express");
const app = express();
const path= require("path");
const port= process.env.PORT||3001;
app.use(express.static(path.resolve(__dirname,"./public")))
app.listen(port,()=> {
    console.log("Servidor corriendos");
});
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});
app.get("/register.html",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
});
app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
});
app.get("/home.html",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});



