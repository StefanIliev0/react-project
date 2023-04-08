import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../../contexts/authContext";

export function RouteGuard({children}){
    const {isAuthenticated} = useContext(AuthContext); 

    if(!isAuthenticated){
        return <Navigate to={"/auth/login"} />; 
    }

    return children ? children : <Outlet />
}