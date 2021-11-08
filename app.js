const express = require("express");
const app = express();
app.get("/about",function(req,res){
    res.send("hey muski jii:), i am software developer")
});
app.get("/contact",function(req,res){
    res.send("if you have any queries contact me on this email id.")
});
app.get("/calculator",function(req,res){
    // console.log(__dirname);
    res.sendFile(__dirname,"/index.html")

});
app.listen(4000,function(req,res){
    console.log("my name is misti")
});