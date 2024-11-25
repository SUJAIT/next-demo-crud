
//REQUEST AND RESPONSE MANAGEMNET

import { Request, Response } from "express";

import { userService } from "./user.service";


//create user 

const createUser = async (req: Request, res: Response) => {

    try {
        const payload = req.body


        //logical works service file a hoba tai payload ar subject ta pass kora dia holo sevice file a..
        const result = await userService.createUser(payload)

        res.json({
            status: true,
            message: "User Create Successfully",
            data: result
        })

    } catch (error) {

        res.json({
            status: false,
            message: "Something Wrong",
            error
        })
    }

}

//getUser
const getUser = async (req: Request, res: Response) => {


    try {
        const result = await userService.getUser()
        res.send({
            status: true,
            message: 'SOmething is Ok 🤗😎',
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}

//getSingelUser
const getSingleUser = async (req: Request, res: Response) => {


    try {
        console.log(req.params)
        const userId = req.params.userId
        const result = await userService.getSingleUser(userId)
        res.send({
            status: true,
            message: 'SOmething is Ok 🤗😎',
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}

//updateUser
const DeleteUser = async (req: Request, res: Response) => {


    try {
        const userId = req.params.userId
        await userService.DeleteUser(userId)
        // const result = await userService.DeleteUser(userId)
        res.send({
            status: true,
            message: 'SOmething is Ok 🤗😎',
            result: {},//[note: result: {} akna karlibasses use ababa kora mana holo amara return ar madaoma result pata tam so sata na patanur jonno ababa object ta use kora ,,ar result  ba return ta na patanur karon holo ata deleted data so na pata lau hoi arki,, saila patalau kisu hoba na]
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}


//delete user

const UpdateUser = async (req: Request, res: Response) => {


    try {
        const userId = req.params.userId
        const body = req.body
        const result = await userService.UpdateUser(userId, body)
        res.send({
            status: true,
            message: 'User Updated Succesfully 🤗😎',
            result,
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        })
    }
}

export const userControllers = {
    createUser,
    getUser,
    getSingleUser,
    UpdateUser,
    DeleteUser
}