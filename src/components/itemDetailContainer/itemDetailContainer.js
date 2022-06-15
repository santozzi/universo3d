import React, { useState, useEffect } from 'react'
import { getProductById } from '../../models/products.model'
import { ItemDetail } from '../itemDetail/itemDetail';
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(4).then(prod => setProduct(prod)).catch(err => console.log(err))
    }, [])



    return (
        <ItemDetail key={product.id} item={product} />
    )
}
