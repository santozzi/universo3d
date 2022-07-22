import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './cartContext/cartContext'
import { ItemCart } from './itemCart/itemCart';
import { AuthContextService } from '../../services/auth.services';
import './cart.css';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

export const Cart = () => {
    const { orderGenerator, findAllItems, totalPlusPrice, clear } = useContext(CartContext);
    const { user, isLogin } = useContext(AuthContextService);
    let navigate = useNavigate();
    const arreglo = findAllItems();
    const orderGen = (buyer) => {
        if (!isLogin) {
            Swal.fire(
                'Debe ingresar para poder generar una orden',
                `Si esta registrado vaya a ingresar sino a registarse`,
                'warning'
            )
        } else {
            orderGenerator(buyer).then(dato => {
                Swal.fire({
                    title: 'Gracias por tu compra!!!!',
                    text: `Tu código de seguimiento es ${dato}`,
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ver orden'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(`/orders/${dato}`);
                    }
                })
                clear();
            });
        }
    }

    return (<>

        {arreglo.length > 0 ?
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',

            }}>
                {
                    findAllItems().map(itemCant => (
                        <ItemCart key={itemCant.item.id} itemCant={itemCant} />
                    ))
                }
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                    <p className='cart-total'>Total <span>${totalPlusPrice()}</span></p>
                    <Box>
                        <Button sx={{
                            backgroundColor: '#aa0509',
                            color: 'white',
                            margin: '1rem',

                            '&:hover': {
                                backgroundColor: '#000',
                            }
                        }}
                            onClick={() => clear()}>Vaciar carrito</Button>
                        <Button sx={{
                            backgroundColor: '#0062D8',
                            color: 'white',
                            margin: '1rem',
                            '&:hover': {
                                backgroundColor: '#000',
                            }
                        }} onClick={() => orderGen(user)}>Generar orden</Button>
                    </Box>
                </Box>
            </Box>

            : <div className='cart-cerolink-container'>
                <div className='cart-image-container'>
                    <div className='cart-text-container'>
                        <p className='cart-cero-items'>No hay items</p>
                    </div>
                </div>

                <Link className='cart-link-to-home' to='/'>ir a home</Link>
            </div>
        }
    </>


    )
}
