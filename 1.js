var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
   console.log("miku")
});

app.listen(4000);