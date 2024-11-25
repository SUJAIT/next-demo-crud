import { ITour } from "./tour.interface"
import Tour from "./tour.model"


// const createTour = async (payload: ITour) => {
//     const result = await Tour.create(payload)
//     return result
// }


//

const createTour = async (payload: ITour) => {
    //   const result = await Tour.create(payload)
  
    const data = new Tour(payload)
  
    //   data.color = "red"
  
    const result = await data.save()
    return result
  }

//



const getTours = async () => {
    const result = Tour.find()
    return result
}

const getSingleTour = async (id: string) => {
    const result = Tour.findById(id)
    return result
}

const UpdateTour = async (id: string, payload: Partial<ITour>) => {
    const result = Tour.findByIdAndUpdate(id, payload)
    return result
}

const deleteTour = async (id: string) => {
    const result = Tour.findByIdAndDelete(id)
    return result
}





export const tourService = {
    createTour,
    getTours,
    getSingleTour,
    UpdateTour,
    deleteTour
}