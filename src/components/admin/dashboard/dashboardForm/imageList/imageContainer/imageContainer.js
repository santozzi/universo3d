import React, { useState, useEffect } from 'react';
import noneImage from '../../image/noneimage.png';
//import { Link } from 'react-router-dom';
import './imageContainer.css';
import { getUrlFileStorageModel } from '../../../../../../models/firebase/image.model';
export const ImageContainer = ({ pictureUrl, clickClose, clickImage }) => {
    const [pictureURL, setPictureUR] = useState('');
    //const url = await getUrlFileStorageModel(pictureUrl);


    useEffect(() => {
        getUrlFileStorageModel(pictureUrl).then(url => {
            setPictureUR(url)


        });

    }, [pictureURL])

    return (

        <div className='imageContainer-relative-image-container'>
            <button onClick={() => clickImage(pictureUrl)} className='imageContainer-image-button'>
                <img className='imageContainer-relative-image' src={pictureURL === '' ? noneImage : pictureURL} />
            </button>
            <button
                className='imageContainer-absolute-button'
                onClick={() => clickClose(pictureUrl)}
            >X</button>
        </div>

    )
}
