import React, { useContext, useState, useEffect } from 'react'
import { AuthContextService } from '../services/auth.services';
import { Navigate } from 'react-router-dom';
import { isAdminService } from '../services/users.service';

export const ProtectedRoutes = ({ children }) => {
    const { user, isAdmin } = useContext(AuthContextService);
    const [access, setAccess] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (user !== {} && user !== null) {
            isAdminService(user.uid).then((res) => {

                setAccess(res);

                console.log(res);



            }).finally(() => setLoading(false))


        } else {
            setAccess(false);
            setLoading(false);
        }
        return () => {
            setLoading(true);
        }
    }, [access])

    return (
        <>
            {loading ? <h1>Cargando...</h1>
                : isAdmin ? children : <Navigate to="/" />
            }
        </>
    );


}
