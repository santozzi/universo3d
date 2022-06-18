import React, { useState, useEffect } from 'react'
import { getProductById } from '../../models/products.model'
import { ItemDetail } from '../itemDetail/itemDetail';
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        console.log(`estado de loading ${loading}`);
        getProductById(2)
            .then(prod => {
                setProduct(prod)
                setLoading(false)
            })
            .catch(err => console.log(err))


        return () => { }


    }, [])



    return (


        <ItemDetail key={product.id} item={product} loading={loading} />

    )
}
