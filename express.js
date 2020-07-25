var express = require('express');

var app = express();

app.get('/home', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
app.listen(3000);

app.get('/:id', function(req, res){
  res.send('You requested to see a profile with the id of ' + req.params.id);
});
