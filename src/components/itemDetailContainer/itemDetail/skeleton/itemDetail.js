import React from 'react'
import { ItemDetailSkeleton } from './itemDetail.skeleton';
import { ItemDetail as ItemDetailComponent } from '../itemDetail';

export const ItemDetail = (props) => {
    const { loading = true } = props;

    return (
        <>
            {
                loading
                    ? <ItemDetailSkeleton key={`s${props.id}`} />
                    : <ItemDetailComponent key={`i${props.id}`} {...props} />}
        </>
    )
}
