import {  register ,login ,logout , create , giveMe } from "../services/requester"
import { checkLoginData, checkRegisterData } from "../utils/checkInputs";

export  async function creteNewUser(data){
    const error = checkRegisterData(data);
    if (error.length > 0){
        throw error ;
    }
    const {token , id} = await register( data.email , data.password ) ; 

    const userData = {
        _id : id ,
        email  : data.email ,
        nickname : data.nickname ,
        age : data.age ,
        "interests" : "" ,
        "location" : {"location" : "" , "county" : ""} ,
        "imgUrl" : "" ,
        groups : [] ,
        activities : []
    }

   await create(`/users/${id}` , userData ) ; 

    return {userData , token}
} ; 
export async function loginUser({email , password}){
    const error = checkLoginData({email , password});
    if (error.length > 0){
        throw error ;
    }
    const {token , id} = await login(email , password) ;
    const userData = await giveMe(`/users/${id}`);
    userData.token = token ;
    return userData 
}
 export async function logoutUser(){
 await logout() ;
 }
