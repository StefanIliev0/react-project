import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut } from "firebase/auth";
import { set ,ref ,update , get , orderByChild , equalTo ,push , orderByValue, query , getDatabase } from "firebase/database";
import { db, auth } from "./initFirebase";



export const register = async (email , password ) => {
    const  userData = await  createUserWithEmailAndPassword(auth, email, password) ;
    const token = await userData.user.getIdToken() ; 
    return {token , id : userData.user.uid}
}

export const login = async (email , password) => {
    const userData = await  signInWithEmailAndPassword(auth, email, password) ;
    const token = userData._tokenResponse.idToken ; 
    return {token , id : userData.user.uid}
}

export const logout = async () => {
    await signOut(auth); 
}

export const create = async (path , payload)  => await  update(ref(db, path ), payload ); 
export const giveMe = async (path ) =>  {
  const snapshot =   await  get(ref(db, path));
if(snapshot.exists){
    const data = snapshot.val() ;
    return data
}
return 
} ;
export const add = async (path , payload)  => await  push(ref(db, path ), payload ); 
export const giveMeAll = async (path) => {
    const currentQuery = query(ref(db, path)  ,  orderByChild("accessibility") , equalTo("all")) ; 
   const snapshot =   await  get(currentQuery);
if(snapshot.exists){
    const data = snapshot.val() ;
    return data
}else{
    return null 
}}






