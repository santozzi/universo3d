import React, { useState, useEffect } from 'react'
import { ImageContainer } from './imageContainer/imageContainer'
import './imageList.css';
import CropEasy from './cropEasy/CropEasy';
import { addFileService, deleteFileService, getImagesService } from '../../../../../services/image.services';
import { ImageList as ImageListMUI } from '@mui/material/';
import { ImageListItem } from '@mui/material';

export const ImageList = ({ clickImage }) => {
    //Inicio de estados para el componente cropEasy
    // const [file, setFile] = useState(null);
    //   const [photoURL, setPhotoURL] = useState('');
    const [openCrop, setOpenCrop] = useState(false);
    const [urlBase, setUrlBase] = useState('');
    //fin de estados para el componente cropEasy

    //imágenes de la base de datos
    const [images, setImages] = useState([]);
    //inicio constantes para el compoente cropEasy
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setUrlBase(URL.createObjectURL(file));
            setOpenCrop(true);
        }
    };


    const cropFunction = (file) => {
        setOpenCrop(false);
        //TODO: agregar un parametro mas para elegir la carpeta y poder categorizar las archivos
        //TODO: recibir promesa para saber si se agrego e informar al usuario. al igual que si hubo un error
        addFileService(file);
    }
    /*   const handleSubmit = async (e) => {
          e.preventDefault();
  
      } */
    //fin constantes para el componente cropEasy




    //constante de imageContainer
    const deleteImage = (file) => {
        //TODO: recibir promesa
        deleteFileService(file);
    }


    useEffect(() => {
        getImagesService().then(imagenes => { setImages(imagenes) });


    }, [images])

    return (


        <>
            {!openCrop ?
                //imageListMui es una galaria de imagenes
                <ImageListMUI cols={5} >
                    <label htmlFor='addPhoto' className='imagelist-button-plus'>
                        <input

                            type='file'
                            id='addPhoto'
                            name='addPhoto'
                            accept='image/*'
                            onChange={handleChange}
                        />
                        <p className='imagelist-button-plus-text'>+</p>

                    </label>
                    {images.map((imagen) => (
                        <ImageListItem key={`ili${imagen.name}`}>
                            <ImageContainer key={imagen.name} pictureUrl={imagen} clickDelete={deleteImage} clickImage={clickImage} />

                        </ImageListItem>
                    ))}
                </ImageListMUI>
                /*
                     photoURL: url de la foto de entrada
                     setOpenCrop: estado true para abierto false para cerrado
                     setPhotoUrl: estado para setear la direccion de la foto ( el cual no estoy usando)
                     setFile: estodo para configurar el archivo de salida de la foto
                    */
                : <CropEasy {...{ urlBase, cropFunction, setPhotoURL, setFile, setOpenCrop }} />
            }

        </>
    )

}
