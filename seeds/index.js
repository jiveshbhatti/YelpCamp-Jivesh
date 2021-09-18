const mongoose = require('mongoose')
const campground = require('../models/campground')
const Campground = require('../models/campground')
const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!! Yelp-camp")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })


    const sample = (array) => array[Math.floor(Math.random() * array.length)]
/**
 * !this is looping our seeds data and taking a random city from our list and looping to a state.
 * &using basic math floor.
 */
    const seedDB = async() =>{

        await Campground.Campground.deleteMany({})//!deletes everything from the database.
        for(let i=0; i<50; i++){
            const price = Math.floor(Math.random() * 20 +10)
            const random1000 = Math.floor(Math.random() * 1000)
           const camp = new Campground.Campground({

                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                image: 'https://source.unsplash.com/collection/483251',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
                price: price
            })

            await camp.save()
        }
    }
    seedDB().then(() => {mongoose.connection.close})