var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const campgroundModel = require('./models/campground')
const chalk = require('chalk'); //&using chalk for console
const methodOverride = require('method-override')

const ejsMate = require('ejs-mate')
/**
 * todo fix the yelp-camp localHost line
 * !excited
 */
//&testing new comments extension.
//^newfunction cool

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(chalk.magenta("CONNECTION OPEN!!! Yelp-camp"))
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })


    //!all my required
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const campgroundRouter = require('./routes/campgrounds')
const campgroundControllers = require('./controllers/campgrounds')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', ejsMate)


//&all my routes will be here
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/campgrounds', campgroundRouter )
app.use(methodOverride('_method'))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//!test area only


// app.put('/campgrounds/:id',
// async(req,res,next) =>{
//   // const campgrounds = await campgroundModel.Campground.findById(req.params.id)
//   // res.render('campgrounds/edit', { campgrounds })
// console.log('you trying to use me?')
//   res.send('it worked')})



//!test area only

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
