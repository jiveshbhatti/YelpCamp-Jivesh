var express = require('express');
//const campground = require('../models/campground');
var router = express.Router();
const campgroundControllers = require('../controllers/campgrounds');
const app = require('../server');
//const server = require('../server')
//const mongoose = require('mongoose')

const methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.put('/:id', campgroundControllers.campgroundIDPutReq)

/* GET home page. */
router.get('/', campgroundControllers.campgroundShow);
router.get('/new', campgroundControllers.newCampground)
router.get('/:id', campgroundControllers.campgroundShowOne)
router.get('/:id/edit', campgroundControllers.campgroundIDEdit)

router.delete('/:id', campgroundControllers.campgroundIDDeleteReq)

//todo this is sending the request to /campgrounds
router.post('/', campgroundControllers.newCampPost)
module.exports = router;


//router.put('/campgrounds/:id', campgroundControllers.campgroundIDPutReq)


