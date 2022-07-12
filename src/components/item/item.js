import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillTrash2Fill, BsPencilFill } from 'react-icons/bs';

import loadingPicture from '../../images/loading-32.gif'
import { AuthContextService } from '../../services/auth.services';
import { removeProductByIdService } from '../../services/product.services';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Divider } from '@mui/material';
export const Item = ({ id, pictureUrl, title, price, loading, remove }) => {
    let navigate = useNavigate();



    // TODO en item.css revisar el tamaño del boton
    const { isAdmin } = useContext(AuthContextService)
    return (
        <Card sx={{

            maxWidth: 200,
            minHeight: 400,
            margin: 1,
            borderRadius: 2,
            boxShadow: '0.5rem 0.5rem 0.5rem #00000090'
        }}>

            <CardActionArea component={Link} to={`/item/${id}`}>
                <CardMedia
                    component="img"
                    height="260"
                    image={pictureUrl}
                    alt="green iguana"
                />
                <CardContent ><Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',



                }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Divider />
                    <Typography variant="h5" color="text.primary">
                        ${price}
                    </Typography>
                </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}