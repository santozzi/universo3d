import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './cartWidjet.css';

import Badge from '@mui/material/Badge';
import { Box } from '@mui/material';

export const CartWidjet = (props) => {
    const { quantity } = props;

    return (
        <Badge badgeContent={quantity} color="error">
            <Box className='cart-widjet-btn' >
                <FaShoppingCart aria-label='carrito de compras' />
            </Box>
        </Badge>
    );
}