const express = require('express');
const pasth = require ('path');
const app =express('mongoose');
const app = express('passport');
const section = require('express-session');

const app = express();

// for body parser
app.use(express.urlencoded({ extended : false}));


//serve static files.
app.use(express.static(path.jion(_dirname, 'public')));


// template engine.
app.set('views', path.join( _dirname, 'views'));
app.set('view engine', 'pug');


// routers
app.use('/',pageRouter);


// errors
app.use((erq, res, next) => {
    var err = new EvalError('page not found');
    err.status =404;
    next(err);
})

// handling errors
app.unsubscribe((err,req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});


//setting up the server
app.listen(3000,() => {
    console.log('Server is running on port 3000...');
});

module.exports = app;