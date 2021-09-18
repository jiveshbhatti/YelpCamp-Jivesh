const campgroundModel = require('../models/campground')
//const campgroundRouter = require('../routes/campgrounds')
//const mongoose = require('mongoose')
//const campground = require('../models/campground')


//&this is taking data from server side.
 const campgroundShow = async (req, res, next) => {
    const campgrounds = await campgroundModel.Campground.find({})
    //campgroundModel.Campground.find({})

    res.render('campgrounds/index', { campgrounds })}

const campgroundShowOne = async (req,res,next) =>{
const campgrounds = await campgroundModel.Campground.findById(req.params.id)
    

    res.render('campgrounds/show', { campgrounds })
}

//to create new campgrounds
const newCampground = async (req, res, next) => {
    // const campgrounds = await campgroundModel.find({})
    // //campgroundModel.Campground.find({})
    res.render('campgrounds/new', {  })}



//todo all my post functions are below

const newCampPost = async(req,res,next) => {

const campground =  new campgroundModel.Campground(req.body.campground)


 await campground.save()

res.redirect(`campgrounds/${campground._id}`)
}



const campgroundIDEdit = async(req,res,next) =>{
    const campgrounds = await campgroundModel.Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campgrounds })
}



const campgroundIDPutReq = async(req,res,next) =>{
    // const campgrounds = await campgroundModel.Campground.findById(req.params.id)
    // res.render('campgrounds/edit', { campgrounds })
    const {id} = req.params
    console.log(id)
    const campgrounds = await campgroundModel.Campground.findByIdAndUpdate(id, {...req.body.campground} )

    res.redirect(`/campgrounds/${campgrounds._id}`)

}


const campgroundIDDeleteReq = async(req,res,next) =>{
    // const campgrounds = await campgroundModel.Campground.findById(req.params.id)
    // res.render('campgrounds/edit', { campgrounds })
    const {id} = req.params
    console.log(id)
    const campgrounds = await campgroundModel.Campground.findByIdAndDelete(id)

    res.redirect(`/campgrounds/`)

}
    module.exports = {

        campgroundShow,
        campgroundShowOne,
        newCampground,
        newCampPost,
        campgroundIDEdit,
        campgroundIDPutReq,
        campgroundIDDeleteReq,

        
    }