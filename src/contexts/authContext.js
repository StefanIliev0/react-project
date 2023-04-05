import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';


import { useLocalStorage } from '../hooks/useLocalStorage';
import { creteNewUser , loginUser, logoutUser} from "../services/authService"

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const onLogin = async (data) => {
            const result = await loginUser(data);
            setAuth(result);
            navigate('/activities');
    
    }
    const onRegister = async (data) => {
            const newUser = await creteNewUser(data) ; 
            setAuth(newUser);
            navigate('/activities');
    };

    const onLogout = async () => {
        await logoutUser();
        setAuth({});
        navigate('/activities');
    };
    const addNewActivity = (newActivity) => {
    if(auth.acivities){
       setAuth((auth) => ({...auth , acivities : [...auth.acivities , newActivity]})) 
    }else{
         setAuth((auth) => ({...auth , acivities : [newActivity]}))
    }
    }
    const addNewGroup = (newGroup) => {
        if(auth.groups){
          setAuth((auth) => ({...auth , groups : [...auth.groups , newGroup]})) 
        }else{
            setAuth((auth) => ({...auth , groups : [newGroup]}))
        }
        }
    

    const contextValues = {
        addNewActivity ,
        addNewGroup ,
        onLogin,
        onRegister ,
        onLogout , 
        userId : auth._id ,
        user: auth ,
        isAuthenticated: !!auth._id, 
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

