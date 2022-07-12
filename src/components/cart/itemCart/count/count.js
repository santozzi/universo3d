import React, { useEffect, useState, useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../../../cartContext/cartContext';
import './count.css';
export const Count = ({ itemCant }) => {


    const { item, quantity } = itemCant;


    const { increment, decrement, itemSize } = useContext(CartContext);

    const [counter, setCounter] = useState(quantity);
    const [plusCounter, setPlusCounter] = useState(false);
    const [minusCounter, setMinusCounter] = useState(false);
    const [stockDisponible, setStockDisponible] = useState(0)



    useEffect(() => {
        setStockDisponible(item.stock - quantity)

        if (itemSize(item.id) < Number(item.stock)) {
            setPlusCounter(true);
        } else {
            setPlusCounter(false);
        }
        if (itemSize(item.id) > 1) {
            setMinusCounter(true);
        } else {
            setMinusCounter(false);
        }


    }, [stockDisponible, quantity]);

    return (
        <>
            <div className='increment-decrement-stock'>
                <button className={`increment-decrement-stock-sign  ${minusCounter ? 'left' : 'disable-sign-l'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        decrement(item.id);

                    }} disabled={!minusCounter}><FaMinus /></button>
                <div className='increment-decrement-stock-n'>{itemSize(item.id)}</div>
                <button className={`increment-decrement-stock-sign  ${plusCounter ? 'right' : 'disable-sign-r'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        increment(item.id)
                    }} disabled={!plusCounter}><FaPlus /></button>
            </div>
            <p className='increment-decrement-disponible'>{`Disponibles: ${stockDisponible} unidades`}</p>
        </>
    )
}
