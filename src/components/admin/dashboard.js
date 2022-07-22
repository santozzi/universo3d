import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noneImage from '../../images/noneimage.png';
import { getUrlFileStorageService } from '../../services/image.services';
import { getProductById, saveProductService } from '../../services/product.services';
import './dashboard.css';
import { ImageList } from './imageList/imageList';
import { useForm } from "react-hook-form";

export const Dashboard = () => {
    //valida formulario
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [imageItem, setImageItem] = useState(noneImage);
    const [isImage, setIsImage] = useState(false)
    const [item, setItem] = useState({});

    const { id } = useParams();

    const clickImage = (file) => {
        setIsImage(false);
        //recibe un archivo de Storage y me devuelve la url, la cual almacena en imageItem
        getUrlFileStorageService(file).then(url => setImageItem(url));

    }

    const editar = ({ target: { name, value } }) => {

        setItem(f => ({ ...f, [name]: value }))


    }
    const handleSubmitForm = (e) => {
        const correo = e.email;
        const password = e.password;
        if (imageItem !== noneImage) {
            const producto = {
                title: e.title,
                stock: e.stock,
                category: e.category,
                price: e.price,
                description: e.description,
                pictureUrl: imageItem
            }
            saveProductService(producto);
            setImageItem(noneImage);
            e.title = "";



        }





    }
    useEffect(() => {

        const itemVacio = {
            id: "",
            title: "",
            category: "",
            price: 0,
            stock: 0,
            description: "",
            pictureUrl: imageItem

        }


        if (id === "" || id === undefined) {
            setItem(itemVacio);
        } else {
            getProductById(id)
                .then((producto) => {
                    setItem(producto);
                })
                .catch((err) => { console.log('error al obtener producto') });
        }
    }, [])


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const archivoHandler = (e) => {

    }
    return (
        <>
            {!isImage ?
                <Box component='section' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#00000030'
                }}>
                    <form onSubmit={handleSubmit(handleSubmitForm)} className='form-login'>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            <Box> <button
                                className='additem-image-container'
                                onClick={() => setIsImage(true)}

                            >
                                {imageItem === noneImage &&
                                    <Alert variant="outlined" severity="error">
                                        El campo es requerido
                                    </Alert>}
                                <img className='additem-image' src={item.pictureUrl} alt='falta imagen' />
                            </button></Box>
                            <Box>


                                <TextField
                                    fullWidth
                                    label="Título"
                                    id="title"
                                    type="text"
                                    size="small"
                                    sx={{
                                        marginTop: 2
                                    }}
                                    {...register('title', {
                                        required: true,
                                    })}
                                />
                                {errors.title?.type === 'required' &&
                                    <Alert variant="outlined" severity="error">
                                        El campo es requerido
                                    </Alert>}


                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                }}>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            label="Precio"
                                            id="price"
                                            type="number"
                                            size="small"
                                            sx={{
                                                marginTop: 2
                                            }}
                                            {...register('price', {
                                                required: true,
                                            })}
                                        />
                                        {errors.price?.type === 'required' &&
                                            <Alert variant="outlined" severity="error">
                                                El campo es requerido
                                            </Alert>}
                                    </Box>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            label="Stock"
                                            id="stock"
                                            type="number"
                                            size="small"
                                            sx={{
                                                marginTop: 2
                                            }}
                                            {...register('stock', {
                                                required: true,
                                            })}
                                        />
                                        {errors.stock?.type === 'required' &&
                                            <Alert variant="outlined" severity="error">
                                                El campo es requerido
                                            </Alert>}
                                    </Box>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            label="Categoría"
                                            id="category"
                                            type="number"
                                            size="small"
                                            sx={{
                                                marginTop: 2
                                            }}
                                            {...register('category', {
                                                required: true,
                                            })}
                                        />
                                        {errors.category?.type === 'required' &&
                                            <Alert variant="outlined" severity="error">
                                                El campo es requerido
                                            </Alert>}
                                    </Box>
                                </Box>

                            </Box>
                        </Box>


                        <Box>

                            <Box>
                                <TextareaAutosize
                                    aria-label="empty textarea"

                                    style={{ width: '100%', height: '10rem' }}
                                    {...register('description', {
                                        required: true,
                                    })}
                                />
                                {errors.description?.type === 'required' &&
                                    <Alert variant="outlined" severity="error">
                                        El campo es requerido
                                    </Alert>}

                            </Box>

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
                        </Box>




                    </form>

                </Box>
                : <ImageList clickImage={clickImage} />}





            {/*
            !isImage ?
                <div className='additem-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='additem-image-data'>
                            <button
                                className='additem-image-container'
                                onClick={() => setIsImage(true)}
                            >
                                <img className='additem-image' src={item.pictureUrl} alt='falta imagen' />
                            </button>

                            <div className='additem-data-container'>
                                <label>Título</label>
                              
                                <textarea type='t' placeholder='Título' defaultValue={item.description} />
                            </div>
                            <input type='submit' defaultValue={item.id ? 'Editar' : 'Crear'} />
                        </div>

                        <div className='additem-data-container'>Descripcion</div>
                    </form>
                </div>
                : <ImageList clickImage={clickImage} />
                    */}

        </>
    )
}
