//Aie file a Types kula nia kaj kora hoba..

export interface IUser {
    name:string,
    age:number,
    email:string,
    photo?:string | null,
    role:'user' | 'admin',
    userStatus:'active' | 'inactive'

}