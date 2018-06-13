var express = require('express');
var app = express();

app.use('/store',function(req, res, next) {
  console.log('I am a middleware function inside the request to /store');
  next();
});
app.use('/warehouse', function(req, res, next){
  console.log("I am a middleware function inside the request to /warehouse");
  next();
})
app.get('/', function(req, res) {
  res.send('Hello world!');
})

app.get('/store', function(req, res) {
  res.send("This is a shop.");
});;

app.get('/warehouse', function(req, res) {
  res.send("This is a warehouse");
});

app.listen(3000);
app.use(function (req, res, next) {
  res.status(404).send("We're very sorry, but we couldn't find your request.");
})
