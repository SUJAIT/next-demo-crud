import { model, Schema } from "mongoose";



const tourSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    durationHours: {
        type: Number,
        required: true
    },
    averageRating: {
        type: Number,
        default: 5
    },
    price: {
        type: Number,
        required: true
    },
    coverImage: { type: String, require: true },
    image: [String],
    startDate:[Date],
    startLocation: { type: String },
    location: [String],
    slug: String,
})


tourSchema.methods.getNextNearestStartDateAndEndData = function(){
  {
    const today = new Date()
    const futureDates = this.startDates.filter((startDate: Date)=>{
        return startDate>today
    })
    futureDates.sort((a:Date,b:Date)=>a.getTime() - b.getDate())
    const nearestStartDate = futureDates[0]
    const estimatedEndDate = new Date(
        nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000
    )
    return{
        nearestStartDate,
        estimatedEndDate
    }
  }  
}


const Tour = model('Tour',tourSchema)

export default Tour;