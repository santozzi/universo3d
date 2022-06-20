import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './errorPage.css'
export const ErrorPage = () => {
    let { mensaje = 'La página no existe' } = useParams();
    let navigate = useNavigate();
    const goToHome = () => {

        navigate('/');
    }
    return (
        <section className='error-page-container'>
            <div className='error-page-card'>
                <p className='error-page-text'>{mensaje}</p>
                <button className='error-page-button' onClick={() => goToHome()}>Ir a home</button>
            </div>
        </section>
    )
}
