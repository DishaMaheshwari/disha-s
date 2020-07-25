var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/style', express.static('stuff'));

app.get('/home', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/profile/:name', function(req, res){
  var data = {age: 19, job: 'student', hobbies: ['eating','writing']}
  res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
