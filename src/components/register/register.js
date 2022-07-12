import {
    Alert,
    Box, Button, Divider, FormControl,
    IconButton, Input, InputAdornment,
    InputLabel, OutlinedInput, TextField
} from '@mui/material'
import React, { useState, useContext, useEffect } from 'react';
import { AuthContextService, newUserService } from '../../services/auth.services';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

export const Register = ({ handle }) => {
    const [loading, setLoading] = useState(false)
    const [validate, setValidate] = useState({
        email: false,
        name: false
    })

    const archivoHandler = (e) => {

    }

    const { isLogin, user, newUserModel } = useContext(AuthContextService);
    //TODO: re hacer aparentemente no usa contexto

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submintHandler = (data) => {
        setLoading(true);

        /* e.preventDefault();
           no lo uso ya que estoy usando 
           la libreria react-hook-form 
        */
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const lastName = data.lastName;
        const phoneNumber = data.phone;



        const newUser = { email, password, name, phoneNumber, lastName };
        newUserModel(newUser).then((alert => {
            Swal.fire(
                'Registro realizado con éxito',
                alert,
                'success'
            )

        }))
            .catch(error => {
                Swal.fire(
                    'El Registro falló',
                    error,
                    'error'
                )
            })
            .finally(() => handle());





    }
    const validatePhone = (phone) => {

        let valido = true;
        console.log(`Numero de telefono ${phone} y valido es: ${valido}`);
        let i = 0;
        for (i = 0; i < phone.length && valido; i++) {
            valido = /^\d$/.test(phone[i]);

        }

        return valido;
    }




    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };







    return (
        <Box component='section' >
            <form onSubmit={handleSubmit(submintHandler)} className='form-login'>
                {/*
                 * NOMBRE
                 */
                }
                <TextField
                    fullWidth
                    label="Nombre *"
                    id="name"
                    type="text"
                    onChange={archivoHandler}
                    sx={{
                        marginTop: 2
                    }}
                    {...register('name', {
                        required: true,
                    })}
                />
                {errors.name?.type === 'required' &&
                    <Alert variant="outlined" severity="error">
                        El campo nombre es requerido
                    </Alert>}
                {/*
                 * APELLIDO
                 */
                }
                <TextField
                    fullWidth
                    label="Apellido *"
                    id="lastName"
                    type="text"
                    onChange={archivoHandler}
                    sx={{
                        marginTop: 2
                    }}
                    {...register('lastName', {
                        required: true,
                    })}
                />
                {errors.lastName?.type === 'required' &&
                    <Alert variant="outlined" severity="error">
                        El apellido es requerido
                    </Alert>}
                {/*
                 *     TELEFONO
                 */
                }
                <TextField
                    fullWidth
                    label="Teléfono *"
                    id="phone"
                    type="tel"
                    onChange={archivoHandler}
                    sx={{
                        marginTop: 2
                    }}
                    {...register('phone', {
                        required: true,
                        validate: validatePhone,
                        maxLength: 15
                    })}

                />
                {errors.phone?.type === 'required' &&
                    <Alert variant="outlined" severity="error">
                        El campo teléfono es requerido
                    </Alert>}
                {errors.phone?.type === 'validate' &&
                    <Alert variant="outlined" severity="error">
                        En el campo teléfono solo pueden ir números
                    </Alert>
                }
                {errors.phone?.type === 'maxLength' &&
                    <Alert variant="outlined" severity="error">
                        Número de telefono muy largo
                    </Alert>

                }


                {/*
                 *  EMAIL
                 */
                }
                <TextField
                    fullWidth
                    label="Correo electrónico *"
                    id="user"
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
                {errors.email?.type === 'required' &&
                    <Alert variant="outlined" severity="error">
                        El email es requerido
                    </Alert>}
                {errors.email?.type === 'pattern' &&
                    <Alert variant="outlined" severity="error">
                        El formato de email es incorrecto
                    </Alert>}
                {/*
                 *       PASSWORD
                 */
                }



                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Contraseña *</InputLabel>
                    <OutlinedInput sx={{ width: '100%' }}
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}

                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Contraseña"
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                    />

                </FormControl>
                {errors.password?.type === 'required' &&
                    <Alert variant="outlined" severity="error">
                        La contraseña es requerido
                    </Alert>}
                {errors.password?.type === 'minLength' &&
                    <Alert variant="outlined" severity="error">
                        La contraseña debe tener mas de 6 digitos
                    </Alert>}


                <Button type='submit' sx={{
                    marginTop: 2,
                    width: '100%',
                    border: '1px solid #4385F2',
                    backgroundColor: '#4385F2',
                    color: 'white',
                    '&:hover': {
                        color: '#4385F2'
                    }

                }}


                >Registrar</Button>

            </form>

            <Divider sx={{ margin: 3 }} />


        </Box>

    )
}
