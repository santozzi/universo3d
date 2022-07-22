import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrash2Fill, BsPencilFill } from 'react-icons/bs';
import { itemStyles as classes } from './itemStyle';
import { AuthContextService } from '../../../services/auth.services';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Divider } from '@mui/material';

export const Item = ({ id, pictureUrl, title, price, remove }) => {
    const { isAdmin } = useContext(AuthContextService)
    return (
        <>
            <Card sx={classes().cardContainer}>
                <CardActionArea component={Link} to={`/item/${id}`} sx={{ height: '100%', flexDirection: 'row' }}>
                    <Box sx={classes().cardContainer.orderContent}>
                        <CardMedia
                            component="img"
                            image={pictureUrl}
                            alt="picture card"
                            sx={classes().cardMedia}
                        />
                        <CardContent sx={classes().cardContext}>
                            <Box>
                                <Typography variant={classes().cardPrice.variant} color={classes().cardPrice.color} >
                                    ${price}
                                </Typography>

                                <Divider />
                                <Typography gutterBottom variant={classes().cardTitle.variant} component={classes().cardTitle.component} >
                                    {title}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Box>
                </CardActionArea>
            </Card>
            {
                isAdmin &&
                <Box sx={classes().adminContainer}>
                    <Link to={`/admin/${id}`}>
                        <Box component='button'
                            sx={classes().adminContainer.edit}>
                            <BsPencilFill aria-label="editar ítem" />
                        </Box>

                    </Link>
                    <Box component='button'
                        onClick={() => remove(id, title)}
                        sx={classes().adminContainer.delete}>
                        <BsFillTrash2Fill aria-label="eliminar ítem" />
                    </Box>
                </Box>
            }
        </>
    );
}