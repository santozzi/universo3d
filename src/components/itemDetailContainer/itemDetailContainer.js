import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../services/product.services';
import { ItemDetail } from './itemDetail/skeleton/itemDetail';
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    let navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        getProductById(id)
            .then(prod => {
                setProduct(prod)
            })
            .catch(err => navigate(`/error/${err.message}`))
            .finally(() => setLoading(false));

    }, [id, navigate])

    return (
        <ItemDetail item={product} loading={loading} />
    )
}
