import React, {useState, useEffect} from 'react';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000/api';

const AuthContext = React.createContext();

function AuthProviderWrapper(props){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState(null);


    /* Store the token in the local storage */

    const storeToken = (token) =>{
        localStorage.setItem('authToken', token);
    };

    /* Authenticate the User via JWT */

    const authenticateUser = () =>{
        // Get the stored token from the localStorage
        const storedToken = localStorage.getItem('authToken');

        // If the token exists in the localStorage
        if (storedToken){
        // We must send the JWT token in the request's "Authorization" Headers
        axios.get(`${BACKEND_URL}/auth/verify`, {Authorization: `Bearer ${storedToken}`})
        .then((response)=>{
            // If the server verifies that JWT token is valid
            const user = response.data;
            // Update state variables
            setIsLoggedIn(true);
            setIsLoading(false);
            setUser(user);
        })
        .catch((error)=>{
            if (error) {
                setAuthError(error.response.data.message);
                return;
            }
            // If the server sends an error response (invalid token)
            // Update state variables
            setIsLoggedIn(false);
            setIsLoading(true);
            setUser(null);
        })
    }
    else {
        // If the token is not available
        setIsLoggedIn(false);
        setIsLoading(true);
        setUser(null);
        }
    };

    const removeToken = () =>{
        // Upon logout, remove the token from the localStorage
        localStorage.removeItem('authToken');
    };

    const logOutUser = () =>{
        removeToken();
        authenticateUser();
    };

    useEffect(()=>{
        // Run the function after the initial render,
        // after the components in the App render for the first time.
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider 
        value = {{
            isLoggedIn,
            isLoading,
            user,
            storeToken, 
            authenticateUser,
            logOutUser,
            authError,
            }}
            >
                {props.children}
        </AuthContext.Provider>
    );
}

export {AuthProviderWrapper, AuthContext};