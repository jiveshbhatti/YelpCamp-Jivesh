const mongoose = require('mongoose');
const review = require('./review');

const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({

    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})


CampGroundSchema.post('findOneAndDelete', async function(doc){
    if(doc){
        await review.deleteMany({

            _id: {
                $in: doc.reviews 
            }
        })
    }
})

const Campground = mongoose.model('Campground', CampGroundSchema)

module.exports = {

    Campground,

}




