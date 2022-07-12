import { Box, Divider, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderByIdService } from '../../services/orders.service';
import { styled } from '@mui/material/styles';
import { IsoLogotipo } from '../iconos/logo/isoLogotipo';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const BoxDate = styled(Box)(({ theme }) => ({

    backgroundColor: '#ffffff60',
    color: '#000000',
    border: '0.1rem solid #000000',
    padding: '0.5rem',
    margin: '0.2rem',
    borderRadius: '2rem'
}
));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));






export const Order = () => {
    const [orden, setOrden] = useState(null)
    const [buyerOrder, setBuyerOrder] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        if (id !== "" && id !== undefined) {
            getOrderByIdService(id)
                .then(orden => {

                    setOrden(orden)



                })
                .catch(err => console.log(err));

        }

    }, [])






    return (
        <Box component='section'
            sx={{ margin: '2rem' }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    backgroundColor: '#00000050',

                }}>
                <Box sx={{
                    backgroundColor: '#000000',
                    padding: '1rem'
                }}>
                    <IsoLogotipo size='100' color='E65100' />
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    color: 'white'

                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                        <Box> {`Nombre: ${orden?.buyer.name}`}</Box>
                        <Box> {`Email: ${orden?.buyer.email}`}</Box>
                        <Box> {`Teléfono: ${orden?.buyer.phone}`}</Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: '100%',
                        color: 'white',


                    }}>
                        <Box >
                            {`N° ${orden?.id}`}
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '2px 2px 2px #00000060',
                            marginTop: '1rem'
                        }}>
                            <Box>Fecha:</Box>
                            <BoxDate>03</BoxDate><BoxDate>10</BoxDate><BoxDate>83</BoxDate>

                        </Box>
                    </Box>


                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Id</StyledTableCell>
                            <StyledTableCell align="right">Producto</StyledTableCell>
                            <StyledTableCell align="right">Cantidad</StyledTableCell>
                            <StyledTableCell align="right">Precio</StyledTableCell>

                            <StyledTableCell align="right">Sub total</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orden?.items.map((item) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row">
                                    {item.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{item.title}</StyledTableCell>
                                <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                                <StyledTableCell align="right">{item.price}</StyledTableCell>
                                <StyledTableCell align="right">{Number(item.quantity) * Number(item.price)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: '#ffffff'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',


                }}><Box sx={{
                    height: '2rem'
                }}> <Divider /></Box>

                    <Box sx={{
                        padding: '1rem'
                    }}>{`Total:  $  ${orden?.total}`}</Box>
                </Box>
            </Box>
        </Box>
    )
}
