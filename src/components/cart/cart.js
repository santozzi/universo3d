import React, { useContext } from 'react'
import { CartContext } from '../cartContext/cartContext'

export const Cart = () => {
    const { removeItem, clear, itemInCart, cartSize } = useContext(CartContext);

    return (<>

        {
            itemInCart.map((item) => (
                <div key={item.item.id}>
                    <p style={{ fontSize: 20 }}>{`${item.item.title}  ${item.quantity}  `}</p>
                    <button onClick={() => removeItem(item.item.id)}>Eliminar</button>
                </div>
            ))

        }
        {cartSize() > 0 ?
            <button onClick={() => clear()}>Borrar todo</button>
            :
            <p style={{ fontSize: 20 }}>Carro vacio</p>
        }
    </>


    )
}
