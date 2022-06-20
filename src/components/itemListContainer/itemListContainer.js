import React, { useState, useEffect } from 'react';
import './itemListContainer.css';
import { ItemList } from '../itemList/itemList';
import { Item } from '../item/item';
import { getProductsByCategory, getProducts, getCategoryById } from '../../models/products.model';
import { useNavigate, useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const arrayDefault = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' }];
    const [products, setProducts] = useState(arrayDefault);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [title, setTitle] = useState("Todas")
    let navigate = useNavigate();
    useEffect(() => {
        setLoading(true);

        if (id === "" || id === undefined) {
            getProducts().then(prod => {
                setProducts(prod);
                setTitle("Todas las categorías");
                setLoading(false);
            }).catch((err) => navigate(`/error/${err}`));

        } else {
            getProductsByCategory(id).then(prod => setProducts(prod));

            getCategoryById(id).then(category => {
                setTitle(category.name)
                setLoading(false);
            }).catch((error) => navigate(`/error/${error}`))

        }
        return () => { setProducts(arrayDefault) }



    }, [id])

    return (
        <ItemList titulo={loading ? 'Cargando...' : title}>
            {products.map(producto => (
                <Item key={producto.id} loading={loading} {...producto} />
            ))}
        </ItemList>
    );
}