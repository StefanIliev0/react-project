

import {  register ,login ,logout , create , giveMe , giveMeMy } from "../services/requester"
import { checkLoginData, checkRegisterData } from "../utils/checkInputs";

export  async function creteNewUser(data){
    const error = checkRegisterData(data);
    if (error.length > 0){
        throw error ;
    }
    const newUserData = {nickname : data.nickname , age : data.age , interests : "" , imgUrl : "" , location : {location : "" , country : ""} }
    const userdata = await register(data.username , data.password , newUserData) ; 
    newUserData._id = userdata.id
    return userdata
} ; 
export async function loginUser({username , password}){
    const error = checkLoginData({username , password});
    if (error.length > 0){
        throw error ;
    }
    const userData = await login(username , password) ;

    const user = {
        _id : userData.id ,
         imgUrl : userData.attributes.imgUrl ,
         interests : userData.attributes.interests ,
         age : userData.attributes.age ,
         location : userData.attributes.location ,
         nickname : userData.attributes.nickname ,
         }

    return  user
}
 export async function logoutUser(){
 await logout() ;
 }
