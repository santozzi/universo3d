import React from 'react';
import './itemListContainer.css';
import { ItemCount } from '../itemCount/itemCount';
export const ItemListContainer = () => {
    const onAdd = (counter) => {

        alert(`Se ha agregado ${counter}  Camisa tiger al carrito`);
    }
    return (

        <>
            <h1 className='itemListContainer'>ItemListContainer</h1>
            <ItemCount product='Camisa tiger' stock='5' initial='1' onAdd={onAdd} />
        </>
    );
}