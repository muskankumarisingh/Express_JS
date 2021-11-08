var express = require('express');
var app = express();

app.get('/things/:id([a-z]{5})', function(req, res){
   res.send('id: ' + req.params.id);
   console.log("mango");
});

app.listen(3000);