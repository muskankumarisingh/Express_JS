const express = require("express");
var a = express();
a.get("/",function(req,res){
    res.send("hey musu");
});
a.listen(8000);
