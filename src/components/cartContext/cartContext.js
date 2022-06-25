import React, { createContext, useState } from 'react'
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const addItem = () => {

    }


    return (
        <CartContext.Provider value={{
            /* funciones a compratir*/

        }}>
            {children}
        </CartContext.Provider>
    )
}
