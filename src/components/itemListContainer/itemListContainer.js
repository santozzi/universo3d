import React, { useState, useEffect } from 'react';
import './itemListContainer.css';
import { ItemList } from '../itemList/itemList';
import { Item } from '../item/item';
import { getProductsByCategory, getProducts, getCategoryById, removeProductByIdService } from '../../services/product.services';
import { useNavigate, useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const arrayDefault = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' }];
    const [products, setProducts] = useState(arrayDefault);
    const [loading, setLoading] = useState(false);
    const [cambio, setCambio] = useState(false);
    const { id } = useParams();
    const [title, setTitle] = useState("Todas")
    let navigate = useNavigate();

    const remove = (id) => {
        removeProductByIdService(id)
            .then(() => {
                console.log('item Eliminado');
                //la utilidad del setCambio es que El useEffect decte que cambie algo y refresque los productos
                setCambio(true);
            })
            .catch(err => console.log(err))


    }
    useEffect(() => {
        setLoading(true);
        setCambio(false);
        if (id === "" || id === undefined) {
            getProducts().then(prod => {
                setProducts(prod);
                setTitle("Todas las categorías");

            }).catch((err) => navigate(`/error/${err}`))
                .finally(() => { setLoading(false) })


        } else {
            getProductsByCategory(id).then(prod => setProducts(prod));

            getCategoryById(id).then(category => {
                setTitle(category.name)

            }).catch((error) => navigate(`/error/${error}`))
                .finally(() => { setLoading(false) })

        }
        return () => { setProducts(arrayDefault) }



    }, [id, cambio])

    return (
        <ItemList titulo={loading ? 'Cargando...' : title}>
            {products.map(producto => (
                <Item key={producto.id} loading={loading} {...producto} remove={remove} />
            ))}
        </ItemList>
    );
}