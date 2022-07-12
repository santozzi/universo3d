import React, { useEffect, useState } from 'react';
//import './itemCount.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Box, Button, Typography } from '@mui/material';



export const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(Number(initial));
    const [plusCounter, setPlusCounter] = useState(false);
    const [minusCounter, setMinusCounter] = useState(false);



    useEffect(() => {

        if (counter < Number(stock)) {
            setPlusCounter(true);
        } else {
            setPlusCounter(false);
        }
        if (counter > 1) {
            setMinusCounter(true);
        } else {
            setMinusCounter(false);
        }

    }, [counter, stock]);

    const increment = () => {
        if (plusCounter) {
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className='item-count-component' >
            <div className='item-count-container'>
                <Typography variant="h6" component="p" sx={{
                    color: 'white',
                    textAlign: 'center'
                }}>{`${stock} unidades`}</Typography>
                <div className='increment-decrement-stock'>
                    <div className={`increment-decrement-stock-sign  ${minusCounter ? 'left' : 'disable-sign-l'}`} onClick={decrement}><FaMinus /></div>
                    <Box sx={{ fontSize: '1.5rem' }}>{counter}</Box>
                    <div className={`increment-decrement-stock-sign  ${plusCounter ? 'right' : 'disable-sign-r'}`} onClick={increment}><FaPlus /></div>
                </div>
            </div>

            <Button
                onClick={() => { onAdd(counter) }}
                sx={{
                    backgroundColor: '#0062D8',
                    color: 'white',
                    width: '100%',
                    '&:hover': {
                        backgroundColor: '#000',
                    }
                }}
            >Agregar a carrito</Button>

        </div>
    )
}

