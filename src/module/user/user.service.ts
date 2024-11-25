
//Logical works nia kaj kora hoba ai file a

import { IUser } from "./user.interface"
import User from "./user.model"

const createUser = async (payload:IUser): Promise<IUser> =>{
    const result = await User.create(payload)
    return result
}

const getUser  = async () =>{
    const result = await User.find()
    return result
}

const getSingleUser = async(id:string)=>{
    // const result = await User.findById({name:"Sujait"})  [note : id sara onno methode a pata hola mana id sara name aor another key words dia pata hola ,, ababa kora jai]
const result = await User.findById(id)
    return result
}


const UpdateUser  = async (id:string, data:IUser) =>{
    const result = await User.findByIdAndUpdate(id,data,{
        new:true
    })  // [note: {new:true} ata use korar maddoma amra data update ar sata sata updated data dekaba ata use na korla sate sate dekatho na relode kora lagtho..]
    return result
}


const DeleteUser  = async (id:string,) =>{
    const result = await User.findByIdAndDelete(id)
    return result
}


export const userService = {
    createUser,
    getUser,
    getSingleUser,
    DeleteUser,
    UpdateUser
}