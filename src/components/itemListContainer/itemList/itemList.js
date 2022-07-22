import React from 'react';
import { ItemListStyles as classes } from './itemListStyles';
import { Box, Typography } from '@mui/material';
export const ItemList = ({ titulo, children }) => {

    return (
        <Box component='section' sx={{
            backgroundColor: '#F2F3F7',

            width: '100%'
        }} >
            <Typography
                gutterBottom
                variant={classes().title.variant}
                component={classes().title.component}
                align={classes().title.align}
            >
                {titulo}
            </Typography>
            <Box component='article' sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'

            }}>
                {children}
            </Box>
        </Box>
    );
}