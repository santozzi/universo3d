import React from 'react';


import { itemStyles as classes } from '../itemStyle';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Box, Divider, Skeleton } from '@mui/material';


export const ItemSkeleton = ({ id, pictureUrl, title, price, loading, remove }) => {




    // TODO en item.css revisar el tamaño del boton

    return (
        <Card sx={classes().cardContainer}>
            <Box sx={classes().cardContainer.orderContent}>
                <Box sx={classes().cardMedia}>

                    <Skeleton
                        variant="rectangular"
                        sx={classes().cardMedia}
                    />

                </Box>

                <CardContent sx={classes().cardContext}>
                    <Box >
                        <Typography gutterBottom variant={classes().cardTitle.variant} component={classes().cardTitle.component}>
                            <Skeleton width={175} />
                        </Typography>
                        <Divider />
                        <Typography variant={classes().cardPrice.variant} color={classes().cardPrice.color}>
                            <Skeleton width={75} />
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
        </Card >


    );
}



//<----------------------------------------------------------------------->
