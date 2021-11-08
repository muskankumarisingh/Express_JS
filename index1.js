const express = require('express')
const app = express()
 
app.get('/m', function (req, res) {
  res.send('Hello muskan')
  console.log("misti");
})
app.listen(4000)