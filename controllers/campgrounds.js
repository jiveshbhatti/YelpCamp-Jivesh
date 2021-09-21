const Joi = require('joi')
const { Error } = require('mongoose')
const campgroundModel = require('../models/campground')
//const campgroundRouter = require('../routes/campgrounds')
//const mongoose = require('mongoose')
//const campground = require('../models/campground')
const Review = require('../models/review')


//&this is taking data from server side.
 const campgroundShow = async (req, res, next) => {
    const campground = await campgroundModel.Campground.find({})
    //campgroundModel.Campground.find({})

    res.render('campgrounds/index', { campground })}

const campgroundShowOne = async (req,res,next) =>{
const campground = await campgroundModel.Campground.findById(req.params.id)
    

    res.render('campgrounds/show', { campground })
}

//to create new campgrounds
const newCampground = async (req, res, next) => {
    // const campgrounds = await campgroundModel.find({})
    // //campgroundModel.Campground.find({})
    res.render('campgrounds/new', {  })}



//todo all my post functions are below

const newCampPost = async(req,res,next) => {

    const campgroundSchema = Joi.object({
        campground: Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required().min(0),
        }).required()
    })
    const result = campgroundSchema.validate(req.body)
    console.log(result)

    if(result.error) {
       alert('Problem')
     
        
    }
const campground =  new campgroundModel.Campground(req.body.campground)


 await campground.save()

res.redirect(`campgrounds/${campground._id}`)
}



const campgroundIDEdit = async(req,res,next) =>{
    const campground = await campgroundModel.Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground })
}



const campgroundIDPutReq = async(req,res,next) =>{
    // const campgrounds = await campgroundModel.Campground.findById(req.params.id)
    // res.render('campgrounds/edit', { campgrounds })
    const {id} = req.params
    console.log(id)
    const campground = await campgroundModel.Campground.findByIdAndUpdate(id, {...req.body.campground} )

    res.redirect(`/campgrounds/${campground._id}`)

}


const campgroundIDDeleteReq = async(req,res,next) =>{
    // const campgrounds = await campgroundModel.Campground.findById(req.params.id)
    // res.render('campgrounds/edit', { campgrounds })
    const {id} = req.params
    console.log(id)
    const campgrounds = await campgroundModel.Campground.findByIdAndDelete(id)

    res.redirect(`/campgrounds/`)

}

const reviewPost = async (req,res)=> {
    const campground = await campgroundModel.Campground.findById(req.params.id).populate('reviews')
    console.log(campground);
    const review = new Review(req.body.review)
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    res.render(`campgrounds/show`, {campground})
    }

    module.exports = {

        campgroundShow,
        campgroundShowOne,
        newCampground,
        newCampPost,
        campgroundIDEdit,
        campgroundIDPutReq,
        campgroundIDDeleteReq,
        reviewPost,

        
    } 