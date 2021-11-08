const express = require("express");
const app = express();
const port = 3000;
app.get("/",function(req,res){
    res.send("Hello Welcome to home page")
});
app.get("/about",function(req,res){
    res.send("It's my about page I am Muskan Singh")
});
app.listen(port,()=>{
    console.log(`Listening to the port no ${port}`)
});