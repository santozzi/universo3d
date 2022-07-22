import React from 'react'

import useMediaQuery from "@mui/material/useMediaQuery";

import {
    Box, Paper, Skeleton, Table, TableBody,
    TableContainer, TableHead, TableRow
} from '@mui/material';


import { OrderStyles as classes } from '../orderStyles';
import { StyledTableCell, StyledTableRow } from '../orderStyles'

export const OrderSkeleton = (props) => {
    const { orden } = props;
    const matchesMobile = useMediaQuery("(max-width:650px)");
    return (
        <Box component='section'
            sx={classes().sectionContainer}
        >
            <Box
                sx={classes().logoDatesContaienr}>
                <Box sx={classes().logoContainer}>
                    <Skeleton
                        variant="rectangular"
                        width={100}
                        height={100}
                    />
                </Box>
                <Box sx={classes().numberDateContainer}>

                    <Box sx={classes().numberDate}>
                        <Box sx={classes().numberContainer}>
                            <Skeleton
                                variant="rectangular"
                                width={120}
                                height={25}
                            />
                        </Box>
                        <Box sx={classes().dateContainer}>


                            <Skeleton
                                variant="rectangular"
                                width={150}
                                height={25}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={classes().buyerContainer}>
                <Box> <Skeleton
                    variant="rectangular"
                    width={120}
                    height={25}
                /></Box>
                <Box> <Skeleton
                    variant="rectangular"
                    width={120}
                    height={25}
                /></Box>
                <Box> <Skeleton
                    variant="rectangular"
                    width={120}
                    height={25}
                /></Box>
            </Box>

            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {!matchesMobile &&
                                <StyledTableCell ></StyledTableCell>
                            }
                            <StyledTableCell align="right">Cargando...</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>

                            <StyledTableCell align="right"> </StyledTableCell>
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
                    <Skeleton
                        variant="rectangular"
                        width={150}
                        height={25}
                    />
                </Box>
            </Box>
        </Box>
    )
}

