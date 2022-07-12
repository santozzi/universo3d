import { Button, Divider, styled, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useContext } from 'react'
import { sigInService } from '../../services/auth.services'
import { AuthContextService } from '../../services/auth.services';
import { Google } from '../iconos/google/google';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
export const LogIn = ({ handle }) => {
    const [loading, setLoading] = useState(false)
    const [estaRegistrandose, setEstaRegistrandose] = useState(false)
    const archivoHandler = (e) => {

    }
    const { isLogin, user, signInWithGoogleModel } = useContext(AuthContextService);


    const { register, handleSubmit, formState: { errors } } = useForm();



    const submintHandler = (e) => {
        setLoading(true);


        if (e.password.length < 6) {
            console.log('usuario o password incorrectos estoy en login.js');
        } else {
            const correo = e.email;
            const password = e.password;
            sigInService(correo, password)
                .then(userCredential => {
                    Swal.fire(
                        'Ingreso realizado con éxito',
                        'Gusto en verle por aquí, Happy Print!!!',
                        'success'
                    )
                })
                .catch(err => {
                    Swal.fire(
                        'Usuario y/o clave incorrectas',
                        'Pruebe no tener las mayusculas activadas, y escribir mas depacio, si no tiene cuenta vaya a registrarse.',
                        'error'
                    )
                })

                .finally(() => {
                    setLoading(false);
                    handle();

                });

        }

    }
    const signInWithGoogle = (e) => {
        e.stopPropagation();
        signInWithGoogleModel().then(
            res => console.log(res)
        ).catch(
            err => console.log(err)
        ).finally(() => handle());
    }
    const InputField = styled((TextField))(({ theme }) => ({
        '& .MuiPaper-root': {
            backgroundColor: '#00000090',
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 300,

        },
    }));

    return (
        <Box component='section' >
            <form onSubmit={handleSubmit(submintHandler)} className='form-login'>

                <div>
                    <TextField
                        fullWidth
                        label="correo electrónico"
                        id="email"
                        type="email"
                        onChange={archivoHandler}
                        sx={{
                            marginTop: 2
                        }}
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
                        })}
                    />
                    {errors.email?.type === 'pattern' && <p>mail invalido</p>}
                </div>
                <div>
                    <TextField
                        fullWidth
                        label="contraseña"
                        id="password"
                        type="password"
                        onChange={archivoHandler}
                        sx={{
                            marginTop: 2
                        }}
                        {...register('password', {
                            required: true
                        })}
                    />
                    {errors.password?.type === 'required' && <p>campo requerido</p>}
                </div>
                <Box >
                    <Button type='submit' sx={{
                        marginTop: 2,
                        width: '100%',
                        border: '1px solid #4385F2',
                        backgroundColor: '#4385F2',
                        color: 'white',
                        '&:hover': {
                            color: '#4385F2'
                        }

                    }}>Iniciar sesión</Button>
                </Box>

            </form>

            <Divider sx={{ margin: 3 }} />
            {/*
            <Button onClick={(e) => signInWithGoogle(e)}
                sx={{
                    width: '100%',
                    border: '1px solid #4385F2',

                    '&:hover': {
                        color: '#fff',
                        backgroundColor: '#4385F250',
                        color: 'white',
                    }
                }}
            ><Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'

            }}><Google fontSize='medium' /> <p> Iniciar con Google</p></Box> </Button> */}


        </Box>
    )
}
