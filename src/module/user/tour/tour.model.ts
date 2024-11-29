import { model, Schema } from "mongoose";
import ITourModel, { ITour, ITourMethods } from "./tour.interface";



const tourSchema = new Schema<ITour, ITourModel, ITourMethods>({
    name: {
        type: String,
        require: true
    },
    durationHours: {
        type: Number,
        required: true
    },
    averageRatting: {
        type: Number,
        default: 5
    },
    price: {
        type: Number,
        required: true
    },
    coverImage: { type: String, require: true },
    images: [String],
    startDates: [Date],
    startLocation: { type: String },
    locations: [String],
    slug: String,
})


tourSchema.methods.getNextNearestStartDateAndEndData = function () {
    {
        const today = new Date()
        const futureDates = this.startDates.filter((startDate: Date) => {
            return startDate > today
        })
        futureDates.sort((a: Date, b: Date) => a.getTime() - b.getDate())
        const nearestStartDate = futureDates[0]
        const estimatedEndDate = new Date(
            nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000
        )
        return {
            nearestStartDate,
            estimatedEndDate
        }
    }
}


const Tour = model<ITour, ITourModel>('Tour', tourSchema)

export default Tour;