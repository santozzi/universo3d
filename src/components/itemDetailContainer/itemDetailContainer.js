import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../services/product.services';
import { ItemDetail } from '../itemDetail/itemDetail';
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    let navigate = useNavigate()
    useEffect(() => {
        setLoading(true)

        getProductById(id)
            .then(prod => {
                setProduct(prod)

            })
            .catch(err => navigate(`/error/${err}`))
            .finally(() => setLoading(false));





    }, [id, navigate])

    //Enviar un componente desde a ItemDeatil desde aca?

    return (
        <ItemDetail item={product} loading={loading} />
    )
}
