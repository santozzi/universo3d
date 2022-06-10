import React, { useEffect, useRef, useState } from 'react';
import './itemCount.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Button } from '../button/button';


export const ItemCount = ({ product, stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(Number(initial));
    const [plusCounter, setPlusCounter] = useState(false);
    const [minusCounter, setMinusCounter] = useState(false);

    const addCart = () => {
        onAdd(counter);
    }


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
        console.log("verifico los signos");
    }, [counter]);




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
                <div className='product'>{product}</div>
                <div className='increment-decrement-stock'>
                    <div className={`increment-decrement-stock-sign  ${minusCounter ? 'left' : 'disable-sign-l'}`} onClick={decrement}><FaMinus /></div>
                    <div className='increment-decrement-stock-n'>{counter}</div>
                    <div className={`increment-decrement-stock-sign  ${plusCounter ? 'right' : 'disable-sign-r'}`} onClick={increment}><FaPlus /></div>
                </div>

            </div>
            <Button value='Agregar a carrito' funcion={addCart} />
        </div>
    )
}

