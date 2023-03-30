import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut } from "firebase/auth";
import { set ,ref ,update , get , orderByChild , equalTo ,} from "firebase/database";
import { db, auth } from "./initFirebase";



const register = async (email , password ) => {
    const  userData = await  createUserWithEmailAndPassword(auth, email, password) ;
    const token = await userData.user.getIdToken() ; 
    return {token , id : userData.user.uid}
}

const login = async (email , password) => {
    const userData = await  signInWithEmailAndPassword(auth, email, password) ;
    const token = userData._tokenResponse.idToken ; 
    return {token , id : userData.user.uid}
}

const logout = async () => {
    await signOut(auth); 
}


const create = async ( headers, path , payload )  => await set(ref(db, path ), payload , headers); 
const giveMe = async (headers, path ) =>  {
  const snapshot =   await  get(ref(db, path), headers);
if(snapshot.exists){
    const data = snapshot.val() ;
    return data
}
return 
} ;


export const requester = {
    register ,
    login , 
    logout
}


export function factoryRequest(token){
    let headers ;

    if (!token) {
        const serializedAuth = localStorage.getItem('auth');

        if (serializedAuth) {
            const auth = JSON.parse(serializedAuth);
            token = auth.token;
        }
    }
    if(token){
        headers = {
                headers: {
                  Authorization: `Bearer ${token}`,
                }} ;       
    }

     return {
            create : create.bind(null , headers) ,
            giveMe : giveMe.bind(null , headers)
        }
}



