const express = require('express');
const router = express.router();

// get index page
router.get('/',(req, res, next) => {res.render('iindex',{title:"My application"});}
    
)

//Get home page
router.get('/home',(req,res, next)=>{
    res.send('this is the home page');
});

// Post login data
router.post('/login', (resq, res, next) => {
    res.json(req.body);
});
  

//Post register data
router.post('/register', (req, res, next)=>{
    res.json(req.body);
});
module.exports =router;