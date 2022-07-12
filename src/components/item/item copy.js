import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillTrash2Fill, BsPencilFill } from 'react-icons/bs';
import './item.css';
import loadingPicture from '../../images/loading-32.gif'
import { AuthContextService } from '../../services/auth.services';
import { removeProductByIdService } from '../../services/product.services';

export const Item = ({ id, pictureUrl, title, price, loading, remove }) => {
    let navigate = useNavigate();



    // TODO en item.css revisar el tamaño del boton
    const { isAdmin } = useContext(AuthContextService)
    return (
        <section>
            {isAdmin &&
                <div className='card-product-button-container'>
                    <button
                        className='card-product-button-remove'
                        onClick={() => remove(id)}
                    >
                        <BsFillTrash2Fill />
                    </button>
                    <button
                        className='card-product-button-edit'
                        onClick={() => { navigate(`/admin/${id}`) }}
                    >
                        <BsPencilFill />
                    </button>
                </div>}
            <Link to={`/item/${id}`} className='card-product-Mobile'>

                <div className='card-product-Mobile-container-image'>
                    {loading
                        ? <img className='card-product-Mobile-image' src={loadingPicture} alt='imagen box' />
                        :
                        <div className='card-product-image-container'>
                            <img className='card-product-Mobile-image' src={pictureUrl} alt='imagen box' />



                        </div>
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
        </section>
    );
}