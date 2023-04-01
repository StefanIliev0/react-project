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
            const {result , token } = await creteNewUser(data) ; 
            setAuth({...result , token } );
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

    const contextValues = {
        onLogin,
        onRegister ,
        onLogout , 
        addNewActivity ,
        user: auth ,
        isAuthenticated: !!auth.token,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

