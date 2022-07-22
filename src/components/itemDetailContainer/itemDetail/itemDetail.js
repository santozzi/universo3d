import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ItemCount } from '../itemCount/itemCount'
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../cart/cartContext/cartContext';
import Box from '@mui/material/Box';
import { ItemDetailStyles as classes } from './itemDetailStyles';
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

    useEffect(() => {
        if (!loading) {
            setStock(item.stock - itemSize(item.id));
        }
    }, [stock, loading, item.stock, item.id, itemSize]);

    return (
        <Box componente='section' sx={classes().sectionContainer}>
            <Card sx={classes().cardContainer}>
                <CardMedia
                    component="img"
                    image={item.pictureUrl}
                    alt={item.alt}
                    height={classes().cardMedia.height}
                />
                <CardContent sx={classes().cardContext}>
                    <Typography gutterBottom variant={classes().title.variant} component={classes().title.component} color={classes().title.color}>
                        {item.title}
                    </Typography>
                    <Typography variant={classes().description.variant} color={classes().description.color}>
                        {item.description}
                    </Typography>
                </CardContent>
            </Card>
            <Box sx={classes().panelPrecioItemCount}>
                <Box sx={classes().panelPrecioItemCount.precioContainer}>
                    <Typography
                        variant={classes().panelPrecioItemCount.precio.variant}
                        component={classes().panelPrecioItemCount.precio.component}
                        color={classes().panelPrecioItemCount.precio.color}>
                        {`$ ${item.price}`}
                    </Typography>
                </Box>
                {bought
                    ?
                    <Button sx={classes().finishButton} component={Link} to='/cart' >
                        Terminar mi compra <FaShoppingCart />
                    </Button>
                    : <ItemCount stock={stock} onAdd={onAdd} initial='1' />
                }
            </Box>
        </Box >
    )
}
