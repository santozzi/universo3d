import React from 'react'
import PropTypes from 'prop-types';
import useMediaQuery from "@mui/material/useMediaQuery";

import {
    Box, Paper, Table, TableBody,
    TableContainer, TableHead, TableRow
} from '@mui/material';
import { DateRectangle } from './dateRectangle/dateRectangle';
import { IsoLogotipo } from './isoLogotipo/isoLogotipo';
import { OrderStyles as classes } from './orderStyles';
import { StyledTableCell, StyledTableRow } from './orderStyles'

export const Order = (props) => {
    const { orden } = props;
    const matchesMobile = useMediaQuery("(max-width:650px)");
    return (
        <Box component='section'
            sx={classes().sectionContainer}
        >
            <Box
                sx={classes().logoDatesContaienr}>
                <Box sx={classes().logoContainer}>
                    <IsoLogotipo size='100' />
                </Box>
                <Box sx={classes().numberDateContainer}>

                    <Box sx={classes().numberDate}>
                        <Box sx={classes().numberContainer}>
                            <strong>N°:</strong> {`${orden?.id}`}
                        </Box>
                        <Box sx={classes().dateContainer}>
                            <strong>Fecha:</strong>

                            <DateRectangle
                                date={orden?.date.toString()}
                                {...classes().dateRectangle} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={classes().buyerContainer}>
                <Box><strong>Nom.:</strong> {`${orden?.buyer.name} ${orden?.buyer.lastName} `}</Box>
                <Box><strong>Email:</strong>  {` ${orden?.buyer.email}`}</Box>
                <Box><strong>Tel.:</strong>  {`${orden?.buyer.phone}`}</Box>
            </Box>

            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {!matchesMobile &&
                                <StyledTableCell >Id</StyledTableCell>
                            }
                            <StyledTableCell align="right">Producto</StyledTableCell>
                            <StyledTableCell align="right">Cantidad</StyledTableCell>
                            <StyledTableCell align="right">Precio</StyledTableCell>

                            <StyledTableCell align="right">Sub total</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orden?.items.map((item) => (
                            <StyledTableRow key={item.id}>
                                {!matchesMobile &&
                                    <StyledTableCell component="th" scope="row">
                                        {item.id}
                                    </StyledTableCell>}
                                <StyledTableCell align="right">{item.title}</StyledTableCell>
                                <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                                <StyledTableCell align="right">{item.price}</StyledTableCell>
                                <StyledTableCell align="right">{Number(item.quantity) * Number(item.price)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={classes().totalContainer}>
                <Box sx={classes().total}>
                    {`Total:  $  ${orden?.total}`}
                </Box>
            </Box>
        </Box>
    )
}
Order.propTypes = {
    /**
     * Recibe un objeto de tipo order 
     * {
     *  id,
     *  buyer:{ name, lastName, email, phone},
     *  date,
     *  items:[{ id, price, quantity, title }],
     *  total     
     * }
     */
    orden: PropTypes.object
}

Order.defaultProps = {
    orden: {
        id: '213133',
        buyer: {
            name: 'Sergio',
            lastName: 'Antozzi',
            email: 'santozzi@gmail.com',
            phone: '123456789'
        },
        date: '433998000000',
        items: [{
            id: '1235466',
            price: '100',
            quantity: '2',
            title: 'Mate'
        }],
        total: '200'
    }
}