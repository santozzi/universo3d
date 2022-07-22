import React from 'react'
import { OrderSkeleton } from './order.skeleton'
import { Order as OrderComponent } from '../order';
export const Order = (props) => {
    const { loading = true } = props;

    return (
        <>
            {
                loading
                    ? <OrderSkeleton />
                    : <OrderComponent {...props} />}
        </>
    )
}