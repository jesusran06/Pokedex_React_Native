import React, {useState, createContext} from "react";

export const AuthContext = createContext({
    user: undefined,
    login: () => {},
    logout: () => {},
});

export function AuthProvider(props){
    const {children} = props;
    const [auth, setauth] = useState(undefined);
    const login = (userData) =>{
        setauth(userData)
    }
    const logout = () =>{
        setauth(undefined)
    }
    const valueContext = {
        auth,
        login,
        logout,
    }
    
    return (
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    )
}