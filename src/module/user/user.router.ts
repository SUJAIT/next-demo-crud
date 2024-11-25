import { Router } from "express";
import { userControllers } from "./user.controller";

const userRouter = Router()

userRouter.post('/create-user', userControllers.createUser)
userRouter.get('/:userId',userControllers.getSingleUser)
userRouter.put('/:userId',userControllers.UpdateUser) //[note: update ar jonno put otoba patch ai2tar akta use kora hoi]
userRouter.delete('/:userId',userControllers.DeleteUser)
userRouter.get('/',userControllers.getUser)

export default userRouter