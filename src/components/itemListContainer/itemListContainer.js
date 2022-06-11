import React, { useState, useEffect } from 'react';
import './itemListContainer.css';
import { ItemList } from '../itemList/itemList';
import { Item } from '../item/item';
import { getProducts } from '../../models/products.model';
import loaderIcon from '../../images/Loading_icon.gif';
export const ItemListContainer = () => {


    const preloadItem = [
        { id: 1, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 2, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 3, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 4, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 5, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 6, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 7, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 8, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 9, title: "---------", price: "-----", pictureUrl: loaderIcon },
        { id: 10, title: "---------", price: "-----", pictureUrl: loaderIcon },

    ]

    const [products, setProducts] = useState(preloadItem)

    useEffect(() => {
        getProducts().then(prod => setProducts(prod))
    }, [products])

    return (
        <ItemList titulo="Mates">
            {products.map(producto => (
                <Item key={producto.id} {...producto} />
            ))}
        </ItemList>
    );
}