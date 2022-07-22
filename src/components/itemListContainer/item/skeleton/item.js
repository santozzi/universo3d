import React from 'react'
import { ItemSkeleton } from './item.skeleton';
import { Item as ItemComponent } from '../item';
export const Item = (props) => {
    const { loading = true } = props;
    return (
        <>
            {
                loading
                    ? <ItemSkeleton key={`s${props.id}`} />
                    : <ItemComponent key={`i${props.id}`} {...props} />}
        </>
    )
}
