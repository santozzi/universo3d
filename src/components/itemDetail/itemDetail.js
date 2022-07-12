import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ItemCount } from '../itemCount/itemCount'
//import './itemDetail.css'
import cargando from '../../images/loading-32.gif';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../cartContext/cartContext';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
export const ItemDetail = ({ item, loading }) => {
    const [bought, setBought] = useState(false);
    const { addItem, itemSize } = useContext(CartContext);

    const [stock, setStock] = useState(0)

    const onAdd = (counter) => {
        setBought(true)
        addItem(item, counter);
        setStock((prevStock) => prevStock - counter);
    }
    let navigate = useNavigate();
    useEffect(() => {
        if (!loading) {
            setStock(item.stock - itemSize(item.id));

        }

    }, [stock, loading]);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    }));


    return (

        <Box componente='section' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000030',
            maxWidth: '60rem'
        }}>



            <Card sx={{
                maxWidth: '20rem',
                boxShadow: '5px 5px 5px #00000040',
                borderRadius: '0.5rem',
                margin: '1rem'
            }}>

                <CardMedia
                    component="img"
                    image={item.pictureUrl}
                    alt={item.alt}
                />
                <CardContent sx={{
                    backgroundColor: '#0062D8'
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="white">
                        {item.description}
                    </Typography>
                </CardContent>

            </Card>




            <Box sx={{

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: ' column',
                boxShadow: '5px 5px 5px #00000040',
                width: '100%',


                borderRadius: '0.5rem',
                margin: '1rem'

            }}>
                <Box sx={{
                    width: '100%',
                    boxShadow: '5px 5px 5px #00000040',
                    borderRadius: '0.5rem',
                    backgroundColor: '#001E3C90',
                    height: '10rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',


                }}>


                    <Typography variant="h5" component="div" sx={{
                        color: 'white',
                    }}>
                        {`$ ${item.price}`}
                    </Typography>


                </Box>
                {bought
                    ? <Button sx={{
                        backgroundColor: '#0062D8',
                        color: 'white',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: '#000',
                        }
                    }} onClick={() => navigate('/cart')} >
                        Terminar mi compra <FaShoppingCart /></Button>
                    : <ItemCount stock={stock} onAdd={onAdd} initial='1' />

                }
            </Box>


        </Box >
    )
}
