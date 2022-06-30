import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import loadingPicture from '../../images/loading-32.gif'

export const Item = ({ id, pictureUrl, title, price, loading }) => {

    // TODO en item.css revisar el tamaño del boton
    return (

        <Link to={`/item/${id}`} className='card-product-Mobile'>

            <div className='card-product-Mobile-container-image'>
                {loading
                    ? <img className='card-product-Mobile-image' src={loadingPicture} alt='imagen box' />
                    : <img className='card-product-Mobile-image' src={pictureUrl} alt='imagen box' />
                }
            </div>
            <div className='card-product-detail-box'>
                {loading
                    ?
                    (<>
                        <p className='card-product-detail-box-tilte'><br /></p>
                        <p className='card-product-detail-box-price'><br /></p>
                    </>)
                    :
                    (<>
                        <p className='card-product-detail-box-tilte'>{title}</p>
                        <p className='card-product-detail-box-price'>${price}</p>
                    </>)
                }
                <div className='card-product-detail-box-icons'>{ /*esto es por ejemplo para icono de favorito*/}</div>
            </div>

        </Link>

    );
}