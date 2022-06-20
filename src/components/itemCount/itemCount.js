import React, { useEffect, useState } from 'react';
import './itemCount.css';
import { FaMinus, FaPlus } from 'react-icons/fa';



export const ItemCount = ({ product, stock, initial }) => {

    const [counter, setCounter] = useState(Number(initial));
    const [plusCounter, setPlusCounter] = useState(false);
    const [minusCounter, setMinusCounter] = useState(false);

    const onAdd = () => {

        alert(`Producto: ${product} Cantidad: ${counter}`)
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
                <div className='product'>{`Stock ${stock} unidades`}</div>
                <div className='increment-decrement-stock'>
                    <div className={`increment-decrement-stock-sign  ${minusCounter ? 'left' : 'disable-sign-l'}`} onClick={decrement}><FaMinus /></div>
                    <div className='increment-decrement-stock-n'>{counter}</div>
                    <div className={`increment-decrement-stock-sign  ${plusCounter ? 'right' : 'disable-sign-r'}`} onClick={increment}><FaPlus /></div>
                </div>
            </div>
            <div className='button' onClick={onAdd}>Agregar a carrito</div>
        </div>
    )
}

