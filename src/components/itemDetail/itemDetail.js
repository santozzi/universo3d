import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from '../itemCount/itemCount'
import './itemDetail.css'
import cargando from '../../images/loading-32.gif'
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../cartContext/cartContext'

export const ItemDetail = ({ item, loading }) => {
    const [bought, setBought] = useState(false);
    const { addItem, itemSize } = useContext(CartContext);

    const [stock, setStock] = useState(0)

    const onAdd = (counter) => {
        setBought(true)
        addItem(item, counter);
        setStock((prevStock) => prevStock - counter);
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (!loading) {
            setStock(item.stock - itemSize(item.id));
            console.log(stock);
        }

    }, [stock, loading]);



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
                            : stock === 0 ?
                                <p className='item-detail-producto-agotado'>Producto agotado</p>
                                :
                                <ItemCount stock={stock} onAdd={onAdd} initial='1' />
                        }
                    </>
                }
            </div>

        </section>
    )
}
