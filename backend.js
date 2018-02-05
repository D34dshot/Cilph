var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});

var app = express();
app.set('template-engine', 'ejs');
app.use('/', express.static('static'));

app.get('/', function(req, res){
  console.log(`Request has been made by ${req.url}`);
  res.render('main.ejs');
});

app.get('/contact', function(req, res){
  console.log(`Request has been made by ${req.url}`);
  res.render('contact.ejs');
});

app.get('/portfolio', function(req, res){
  console.log(`Request has been made by ${req.url}`);
  res.render('portfolio.ejs');
});

app.get('/experience', function(req, res){
  console.log(`Request has been made by ${req.url}`);
  res.render('experience.ejs');
});

app.get('/about', function(req, res){
  console.log(`Request has been made by ${req.url}`);
  res.render('about.ejs');
})

app.listen(3000);
console.log('Now listening to post 3000');
