import { useContext } from "react"
import {Navigate} from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"


export function Logout() {
const {onLogout} = useContext(AuthContext);

onLogout() ;
    return <Navigate to="/" replace />
}