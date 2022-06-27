import React, { createContext, useState } from 'react'
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    //itemInCart es un arreglo de {Item, cantidad}

    const [itemInCart, setItemsInCart] = useState([]);
    /**
     * addItem: agrega cierta cantidad de items al carro de compras
     * @param {*} item 
     * @param {*} quantity 
     */
    const addItem = (item, quantity) => {
        if (itemInCart.length === 0) {
            setItemsInCart([{ item, quantity }]);
        } else {
            if (isInCart(item.id)) {
                //si ya esta el item en la lista
                const itemInCartCopy = [...itemInCart];
                const itemCart = itemInCartCopy.find((itemCart) => item.id === itemCart.item.id);
                itemCart.quantity += quantity;
                setItemsInCart([...itemInCartCopy]);
            } else {
                setItemsInCart([...itemInCart, { item, quantity }]);
                console.log(`Agrego si no existe el item ${itemInCart}`);
            }
        }
    }
    /**
     * 
     * @returns devuelve el tamaño de la lista de productos
     */
    const cartSize = () => {
        return itemInCart.length;
    }
    const itemSize = (id) => {
        let cant = 0;
        if (isInCart(id)) {
            cant = itemInCart.find(itemCart => itemCart.item.id === id).quantity;
        }
        return cant;
    }
    /**
     * removeItem: elimina un item segun su id
     * @param {*} itemId 
     */
    const removeItem = (itemId) => {
        if (isInCart(itemId)) {
            let itemInCartCopy = [...itemInCart];
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
        return itemInCart.some((itemCant) => itemCant.item.id === id)
    }
    /**
     * 
     * @returns devuelve todos los elementos de la lista de items
     */
    const findAllItems = () => {
        return itemInCart;
    }
    //TODO disminuir cantidad de un item ej, mate bender 5, (click) mate bender 4

    return (
        <CartContext.Provider value={{
            /* funciones a compratir*/
            addItem, removeItem, clear, findAllItems, itemInCart, cartSize, itemSize
        }}>
            {children}
        </CartContext.Provider>
    )
}
