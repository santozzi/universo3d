import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from '../itemCount/itemCount'
import './itemDetail.css'
import cargando from '../../images/loading-32.gif'
import { FaShoppingCart } from 'react-icons/fa';
export const ItemDetail = ({ item, loading }) => {
    const [bought, setBought] = useState(false);


    const onAdd = (counter) => {
        setBought(true)

    }
    const navigate = useNavigate();




    return (
        <section className='item-detail-section'>
            <div className='item-detail-image-description'>
                <div className='item-detail-image-container'>
                    {loading ?
                        <img className='item-detail-image' src={cargando} alt={item.title} />
                        :
                        <img className='item-detail-image' src={item.pictureUrl} alt={item.title} />

                    }
                </div>


                <div className='item-detail-description'>
                    {loading ? <></>
                        : <>
                            <p className='item-detail-description item-detail-description-titule'>Descripción</p>
                            <p>{item.description}</p>
                        </>
                    }
                </div>

            </div>



            <div className='item-detail-resume'>
                {loading ? <p className='item-detail-information-loading'>Cargando...</p>
                    : <>
                        <div className='item-detail-information'>

                            <div className='item-detail-title'>{item.title}</div>
                            <div className='item-detail-price'>{`$ ${item.price}`}</div>

                        </div>
                        {bought ?
                            <button className='item-detal-button-terminar-compra' onClick={() => navigate('/cart')} >
                                Terminar mi compra <FaShoppingCart /></button>
                            :
                            <ItemCount stock={item.stock} onAdd={onAdd} initial='1' />
                        }
                    </>
                }
            </div>

        </section>
    )
}
