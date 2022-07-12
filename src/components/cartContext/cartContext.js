import React, { createContext, useState } from 'react'
import { saveOrderService } from '../../services/orders.service';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    //itemInCart es un arreglo de {Item, cantidad}

    const [itemsInCart, setItemsInCart] = useState([]);
    const [verOrden, setVerOrden] = useState(true);
    const verOrdenClose = () => {
        setVerOrden(prev => !prev);
    }
    /**
     * addItem: agrega cierta cantidad de items al carro de compras
     * @param {*} item 
     * @param {*} quantity 
     */
    //TODO meter return en vez de else para aplanar al arbol
    const addItem = (item, quantity) => {
        if (itemsInCart.length === 0) {
            setItemsInCart([{ item, quantity }]);
        } else {
            if (isInCart(item.id)) {
                //si ya esta el item en la lista
                const itemInCartCopy = [...itemsInCart];
                const itemCart = itemInCartCopy.find((itemCart) => item.id === itemCart.item.id);
                itemCart.quantity += quantity;
                setItemsInCart([...itemInCartCopy]);
            } else {
                setItemsInCart([...itemsInCart, { item, quantity }]);

            }
        }
    }
    /**
     * 
     * @returns devuelve el tamaño de la lista de productos
     */
    const cartSize = () => {
        return itemsInCart.length;
    }
    const itemSize = (id) => {
        let cant = 0;
        if (isInCart(id)) {
            cant = itemsInCart.find(itemCart => itemCart.item.id === id).quantity;
        }
        return cant;
    }
    /**
     * removeItem: elimina un item segun su id
     * @param {*} itemId 
     */
    const removeItem = (itemId) => {
        if (isInCart(itemId)) {
            let itemInCartCopy = [...itemsInCart];
            let itemCart = itemInCartCopy.find((itemCart) => (
                itemCart.item.id === itemId
            ))
            itemInCartCopy.splice(itemInCartCopy.indexOf(itemCart), 1);
            setItemsInCart(itemInCartCopy);
        }
    }
    /**
    * clear: elimina todos los elementos del carro de compras
    */
    const clear = () => {
        setItemsInCart([]);
    }
    /**
     * isInCart: verifica si el item ya existe en el carrito segun id
     * @param {*} id 
     * @returns ture, si el item está en el carrito y false de lo contrario
     */
    const isInCart = (id) => {
        return itemsInCart.some((itemCant) => itemCant.item.id === id)
    }
    /**
     * 
     * @returns devuelve todos los elementos de la lista de items
     */
    const findAllItems = () => {
        return itemsInCart;
    }
    //TODO disminuir cantidad de un item ej, mate bender 5, (click) mate bender 4

    const decrement = (id) => {
        const itemsInCartCopy = [...itemsInCart];
        if (isInCart(id)) {
            const itemCant = itemsInCartCopy.find(itemCant => itemCant.item.id === id);
            itemCant.quantity -= 1;
            setItemsInCart(itemsInCartCopy);
        }
    }
    const increment = (id) => {
        const itemsInCartCopy = [...itemsInCart];
        if (isInCart(id)) {
            const itemCant = itemsInCartCopy.find(itemCant => itemCant.item.id === id);
            itemCant.quantity += 1;
            setItemsInCart(itemsInCartCopy);

        }
    }
    const totalPlus = () => {
        let plus = 0;
        itemsInCart.forEach(itemCant => {
            plus += itemCant.quantity;
        });
        return plus;
    }
    const totalPlusPrice = () => {
        let plus = 0;
        itemsInCart.forEach(itemCant => {
            plus += itemCant.quantity * itemCant.item.price;
        });
        return plus;
    }

    const orderGenerator = (user) => {

        const itemOrder = itemsInCart.map(itemCant => {
            return {
                id: itemCant.item.id,
                title: itemCant.item.title,
                price: itemCant.item.price,
                quantity: itemCant.quantity
            }

        });

        const orden = {
            buyer: {
                name: user.name,
                phone: user.phoneNumber,
                email: user.email
            },
            items: itemOrder,
            date: new Date(),
            total: totalPlusPrice()
        }
        return saveOrderService(orden);
    }
    return (
        <CartContext.Provider value={{
            /* funciones a compratir*/
            orderGenerator, addItem, removeItem, clear, findAllItems, cartSize, itemSize, totalPlus, totalPlusPrice, increment, decrement
        }}>
            {children}
        </CartContext.Provider>
    )
}
