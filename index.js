var express = require('express');

var app = express();
// GET
// POST
// DELETE

app.get('/home', function(req, rep) {
    rep.send('this is home page');
})

app.get('/about', function(req, rep) {
    rep.send('this is about page');
})

app.get('/contact', function(req, rep) {
    rep.send('this is contact page');
})

app.listen(3000,function(){
    console.log('our server is live on posrt 3000');
})