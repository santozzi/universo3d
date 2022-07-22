import { Alert, Button, Divider, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
//import {useContext} from 'react';
import { sigInService } from '../../../services/auth.services'
//import { AuthContextService } from '../../../services/auth.services';
//import { Google } from '../../utils/iconos/google/google';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
export const LogIn = ({ handle }) => {
    const [loading, setLoading] = useState(false)
    const archivoHandler = (e) => {

    }
    //EN DESARROLLO
    //const { signInWithGoogleModel } = useContext(AuthContextService);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submintHandler = (e) => {
        setLoading(true);
        if (e.password.length < 6) {
            handle();
            Swal.fire(
                'Usuario y/o clave incorrectas',
                'Pruebe no tener las mayusculas activadas, y escribir mas depacio, si no tiene cuenta vaya a registrarse.',
                'error'
            )

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
    /*
    EN DESARROLO
      const signInWithGoogle = (e) => {
          e.stopPropagation();
          signInWithGoogleModel().then(
              res => console.log(res)
          ).catch(
              err => console.log(err)
          ).finally(() => handle());
      }
  */
    return (
        <Box component='section' >
            {loading
                ? <h2>Autorizando... </h2>
                : <form onSubmit={handleSubmit(submintHandler)} className='form-login'>
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
                        {errors.email?.type === 'pattern' &&
                            <Alert variant="outlined" severity="error">
                                Formato de email incorrecto debe ser como por ej, nombre@dominio.com
                            </Alert>}
                        {errors.email?.type === 'required' &&
                            <Alert variant="outlined" severity="error">
                                Este campo es obligatorio
                            </Alert>}
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
                        {errors.password?.type === 'required' &&
                            <Alert variant="outlined" severity="error">
                                Este campo es obligatorio
                            </Alert>}
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
            }
            <Divider sx={{ margin: 3 }} />
            {/*
            PROXIMAMENTE LOGUEO CON GOOGLE!! 
            //TODO: pedir los datos de usuario al ingreso con gmail para poder armar el perfil
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
