import './auth.css';
import { createContext, useState, useEffect } from 'react';


import React from 'react'
import { AuthContextProviderService, AuthContextService, getUserService, signOutService } from '../../services/auth.services';



export const AuthContextProvider = ({ children }) => {

    /*
        const [user, setUser] = useState({});
        const [isLogin, setIsLogin] = useState(false);
    
        const logOut = () => {
            signOutService().then(() => {
    
                setIsLogin(false);
            });
    
        }
    
        useEffect(() => {
    
            getUserService().then(credential => {
                setUser(credential);
                if (credential != null) {
                    setIsLogin(true)
                } else {
                    setIsLogin(false)
                }
                console.log(user);
            })
    
        }, [isLogin])
    
    
    */
    return (
        <AuthContextProviderService>
            {children}
        </AuthContextProviderService>


    )
}
