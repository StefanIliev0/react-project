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
            setAuth(result );
            navigate('/activities');
    
    }
    const onRegister = async (data) => {
            const result = await creteNewUser(data) ; 
            setAuth(result );
            navigate('/activities');
    };

    const onLogout = async () => {
        await logoutUser();
        setAuth({});
        navigate('/activities');
    };

    const contextValues = {
        onLogin,
        onRegister ,
        onLogout , 
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

