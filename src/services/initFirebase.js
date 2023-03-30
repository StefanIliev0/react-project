import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBjJUlcFaOsLRCGCHO6RlG8Ft2ed9iWwro",
  authDomain: "my-react-project-81994.firebaseapp.com",
  databaseURL: "https://my-react-project-81994-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-react-project-81994",
  storageBucket: "my-react-project-81994.appspot.com",
  messagingSenderId: "572825661772",
  appId: "1:572825661772:web:9374a1bc9311d763405fe9",
  measurementId: "G-76JBMH4FM3"
};
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app) ; 
