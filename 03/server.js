var express = require('express');
var app = express();

//GET POST DELETE PUT
app.get('/', function(req, res){
  res.send('Hallo everyone!');
});

app.get('/users/:name', function(req, res){
  res.send("The name is " + req.params.name);
});

app.listen(3000);
