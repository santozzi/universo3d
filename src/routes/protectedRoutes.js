import React, { useContext, useState, useEffect } from 'react'
import { AuthContextService } from '../services/auth.services';
import { Navigate } from 'react-router-dom';
import { isAdminService } from '../services/users.service';

export const ProtectedRoutes = ({ children }) => {
    const { usr, isAdmin } = useContext(AuthContextService);



    return (
        <>
            {isAdmin ? children : <Navigate to="/" />}
        </>
    );


}
