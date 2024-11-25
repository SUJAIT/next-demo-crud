
// DATA MODEL MANAGEMENT

import { model, Schema } from "mongoose"
import { IUser } from "./user.interface"

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true,"Please Provide your name"]
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate:{
           validator: function (value:string){
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        },
        message:'{VALUE} is not a valid email'
        },
        immutable:true, // [note: ata akta karjokori method ,,ata ami jodi email ta ka update korta sai sta update korta diba na]
    },
    photo: String,
    role: {
        type: String,
        enum:['user','admin'],
        default:'user',
        message:"Please Provide a valid Rule",
        required: true
    },
    userStatus: {
        type:String,
        enum:['active','inactive'],
        message:"Please Provide [VALUE] Role",
        required:true
    },
})


// hook-> pre-hook
//[note: {this} ai pura file ar documents gulaka access kora {next} porborti dapa jauar jonno push kora ja middlware pass kora dai...]
// userSchema.pre('find',function(this,next){
//     this.find({userStatus:{$eq:'active'}})
//     next()
// })
//ai hook ta sokol user filter kora sudu active usar kai get korta dai....
//uppercase hooks
userSchema.post('find',function(docs,next){
    docs.forEach((doc:IUser)=>{
        doc.name = doc.name.toUpperCase()
    })
    next()
})

const User = model<IUser>('User', userSchema)
export default User