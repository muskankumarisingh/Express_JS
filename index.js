const path=require("path");
const express = require("express");
const app = express();

//relative absolute
console.log(__dirname);

const staticPath= path.join(__dirname,"../public");

//builtin middleware
app.use(express.static(staticPath));

app.get("/",(req,res) =>{
    res.send("hello word from the Muskan");
});
app.get("/about",(req,res) =>{
    res.send("hello world from the About page");
});
app.listen(8000,()=>{
    console.log("Server Listening On Port At 8000");
});