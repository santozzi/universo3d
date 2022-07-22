import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderByIdService } from '../../../services/orders.service';
import { Order } from './order/skeleton/order';
import { useNavigate } from 'react-router-dom';

export const OrderContainer = () => {
    const [orden, setOrden] = useState(null)
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        setLoading(true)
        if (id !== "" && id !== undefined) {
            getOrderByIdService(id)
                .then(orden => {
                    setOrden(orden)
                })
                .catch(error => navigate(`/error/${error.message}`))
                .finally(() => setLoading(false));
        }
    }, [id, navigate])

    return (
        <Order orden={orden} loading={loading} />

    );

}
