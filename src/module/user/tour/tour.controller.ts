import { userControllers } from './../user.controller';
import { Request, Response } from "express";
import { tourService } from "./tour.service";




//create tour req response start
const createTour = async (req: Request, res: Response) => {

  try {
    const body = req.body
    const result = await tourService.createTour(body)
    res.send({
      success: true,
      message: "Tour Create Sucessfully",
      result
    })
  } catch (error) {
    res.send({
      success: true,
      message: "Tour Create Sucessfully",
      error
    })
  }

}
//end create


//getsingaletour req response start
const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await tourService.getSingleTour(id)

    res.send({
      success: true,
      message: 'Tour get successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
//end get

//getTours req response start
const getTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTours()

    res.send({
      success: true,
      message: 'Tours get successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

//end get

//update start
const UpdateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const body = req.body
    const result = await tourService.UpdateTour(id, body)

    res.send({
      success: true,
      message: 'Tour updated successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
//update end
//delete start
const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await tourService.deleteTour(id)

    res.send({
      success: true,
      message: 'Tour deleted successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
//delete end

export const tourController = {
  getTours,
  getSingleTour,
  createTour,
  UpdateTour,
  deleteTour
}