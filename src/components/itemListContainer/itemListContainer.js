import React, { useState, useEffect } from 'react';
import { ItemList } from './itemList/itemList';
import { Item } from './item/skeleton/item';
import {
    removeProductByIdService, getProductsPagerService,
    getProductsByCategoryPagerService
} from '../../services/product.services';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Grid, Pagination, Stack } from '@mui/material';
import { ItemListContainerStyles as classes } from './itemListContainerStyles';
import Swal from 'sweetalert2'
import { getCategoryByIdService } from '../../services/categories.sevice';
export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cambio, setCambio] = useState(false);
    const { id } = useParams();
    const [title, setTitle] = useState("Todas")
    const [loadingItems, setLoadingItems] = useState([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    //para reiniciar el pager cuando cambio de categoría
    const [from, setFrom] = useState();


    let navigate = useNavigate();

    const remove = (id, title) => {
        Swal.fire({
            title: 'En realidad quiere borrarlo ?',
            text: `Una vez borrado, el item: ${title} se perderá`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, claro'
        }).then((result) => {
            if (result.isConfirmed) {
                removeProductByIdService(id)
                    .then(() => {
                        Swal.fire(
                            'Eliminado!',
                            'Su item ha sido eliminado!',
                            'success'
                        )

                        //la utilidad del setCambio es que El useEffect decte que cambie algo y refresque los productos
                        setCambio(true);
                    })
                    .catch(err => {
                        Swal.fire(
                            'Error',
                            `Problemas al eliminar el item: ${err.message}`,
                            'error'
                        )
                    })

            }
        })









    }


    useEffect(() => {
        const cantProd = 8;

        //este bloque es para que cuando pase a otra categoria el pager empiece en 1
        if (id !== from) {
            setFrom(id);
            setPage(1);
        }
        setLoading(true);
        setCambio(false);
        let skeleton = [];
        for (let i = 0; i < cantProd; i++) {
            skeleton = [...skeleton, { id: `loadItem${i}` }]
        }
        setLoadingItems(skeleton);
        if (id === "" || id === undefined) {
            getProductsPagerService(page, cantProd)
                .then(items => {
                    setCount(items.count);
                    setProducts(items.pagination)
                })
                .catch(err => console.log(err))
                .finally(() => { setLoading(false) })
            setTitle("Todas las categorías");

        } else {

            getProductsByCategoryPagerService(page, cantProd, id)
                .then(items => {
                    setCount(items.count);
                    setProducts(items.pagination)
                    getCategoryByIdService(id)
                        .then(category => {
                            setTitle(category.name);
                        })
                        .catch((error) => navigate(`/error/${error.message}`))
                        .finally(() => { setLoading(false) })


                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                })


        }


    }, [id, cambio, navigate, page])

    return (
        <ItemList titulo={loading ? 'Cargando...' : title} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'

        }}>
            <Box componet='section' sx={{
                display: 'flex',
                alignItems: 'center',
                width: '50rem',

                justifyContent: 'center',
                flexDirection: 'column',



            }}>
                <Grid container justifyContent="center" >
                    {
                        loading
                            ?
                            loadingItems.map((loadItem, index) => (
                                <Grid key={`gridContainer9${index}`} item xs={classes().grid.xs} md={classes().grid.md} lg={classes().grid.lg}>
                                    <Grid key={`gridContainer${loadItem.id}`} container
                                        justifyContent="center"
                                        alignItems="stretch"
                                    >
                                        <Item key={loadItem.id} loading='true'></Item>
                                    </Grid>
                                </Grid>
                            ))
                            : products.map(product => (
                                <Grid key={`gridContaineritem5${product.id}`} item xs={classes().grid.xs} md={classes().grid.md} lg={classes().grid.lg}>
                                    <Grid key={`gridContaineritem${product.id}`} container
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Item key={product.id} loading={loading} {...product} remove={remove} />
                                    </Grid>
                                </Grid>
                            ))
                    }
                </Grid>
                <Stack spacing={2}>
                    <Pagination
                        size='large'
                        count={count}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        shape="rounded"
                        sx={{
                            margin: 4,

                        }}
                    />

                </Stack>
            </Box>

        </ItemList >
    );
}