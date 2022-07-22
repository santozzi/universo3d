import './auth.css';
import React from 'react'
import { AuthContextProviderService } from '../../../services/auth.services';

export const AuthContextProvider = ({ children }) => {
    return (
        <AuthContextProviderService>
            {children}
        </AuthContextProviderService>
    )
}
