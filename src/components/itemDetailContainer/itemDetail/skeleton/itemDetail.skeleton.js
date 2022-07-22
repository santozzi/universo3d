import React from 'react'
import Box from '@mui/material/Box';
import { ItemDetailStyles as classes } from '../itemDetailStyles';
import { Card, CardContent, Skeleton, Typography } from '@mui/material';

export const ItemDetailSkeleton = () => {
    return (
        <Box componente='section' sx={classes().sectionContainer}>
            <Card sx={classes().cardContainer.skeleton}>
                <Skeleton
                    variant="rectangular"
                    sx={classes().cardMedia}
                />
                <CardContent sx={classes().cardContext}>
                    <Typography gutterBottom variant={classes().title.variant} component={classes().title.component}>
                        <Skeleton width={classes().cardContainer.width - 30} />
                    </Typography>
                    <Typography variant={classes().description.variant} color={classes().description.color}>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Typography>
                </CardContent>
            </Card>
            <Box sx={classes().panelPrecioItemCount}>
                <Box sx={classes().panelPrecioItemCount.precioContainer}>
                    <Typography
                        variant={classes().panelPrecioItemCount.precio.variant}
                        component={classes().panelPrecioItemCount.precio.component}
                        color={classes().panelPrecioItemCount.precio.color}>
                        <Skeleton width={100} height={50} />
                    </Typography>
                </Box>
                <Typography variant='h4' color={classes().description.color}>
                    <Skeleton width={100} />
                    <Skeleton width={100} />
                    <Skeleton width={100} />
                </Typography>
            </Box>
        </Box >
    )
}
