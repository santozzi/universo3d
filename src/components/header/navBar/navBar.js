import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BlackMenu, ButtonLink, NavBarStyles as classes } from './navBarStyles';
import { LogIn } from '../../Auth/logIn/logIn';
import { IsoLogotipo } from '../../utils/iconos/logo/isoLogotipo';
import { Register } from '../../Auth/register/register';
import { CartWidjet } from '../../cart/cartWidjet/cartWidjet';

//<-----------------------INICIO CONTEXTOS------------------------------------->
import { CartContext } from '../../cart/cartContext/cartContext';
import { AuthContextService, signOutService } from '../../../services/auth.services';
//<-----------------------FIN CONTEXTOS------------------------------------->

//<---------------------INICIO MATERIAL UI------------------------------------->
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Breadcrumbs, Modal } from '@mui/material'

//<-----------------------FIN MATERIAL UI------------------------------------->





export const NavBar = () => {
    const { totalPlus } = useContext(CartContext);
    //<------------------------MODAL MATERIAL UI-------------->
    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenRegister = () => setOpenRegister(true);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseRegister = () => setOpenRegister(false);
    const handleCloseLogin = () => setOpenLogin(false);


    //<-----------------------INICIO MATERIAL UI NAVBAR------------------->
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);



    //Acciones de los botones
    const indexOperation = (operation) => {
        if (operation === 1) {
            console.log('operation 1');
        } else {
            cerrarSesion();
        }
    }
    //TODO: avisar al usuario que se cerror sesion con éxito
    const cerrarSesion = () => {
        signOutService()
            .then(ok => console.log(ok))
            .catch(err => console.log(err));
    }


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    //<-------------------------FIN MATERIAL UI NAVBAR-------------------->


    const { isLogin, isAdmin, credential } = useContext(AuthContextService)

    const active = {
        color: 'red',
    }

    const disactive = {
        default: {
            color: "#eee"
        },
        Hovered: {
            color: 'red'
        }

    }

    const pages = [
        { category: '', title: 'INICIO' },
        { category: '/category/1', title: 'MATES' },
        { category: '/category/2', title: 'PORTA SAHUMERIOS' },
        { category: '/category/3', title: 'LLAVEROS' },
        { category: '/category/4', title: 'CORTADORES' },
    ];
    //TODO eliminar, hacer o cambiar/agregar ordenes de compra
    const settings = [
        // { title: 'Perfil', operation: 1 },
        { title: 'Logout', operation: 2 }
    ];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: 200, sm: 400, md: 700 },

        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (

        <AppBar component='nav' position="static" sx={classes().appBarContainer}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*iSO lOGOTIPO */}
                    <ButtonLink
                        component={NavLink}
                        to="/"
                        key={'iso1'}
                        onClick={handleCloseNavMenu}
                        aria-label='Universo 3D'
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            sx={classes().isoLogotype}
                        >
                            UNIVERSO

                        </Typography>
                        <IsoLogotipo fontSize='large' />
                    </ButtonLink>
                    {/*FIN iSO lOGOTIPO */}

                    {/*MENU CUANDO LA PANTALLA ESTA EN XS (MOBILE)*/}
                    <Box sx={classes().menuMobile}>
                        {/*ICONO DE HAMBURGESA */}
                        <IconButton
                            size="large"
                            aria-label="ingreso al menú"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/*FIN ICONO DE HAMBURGESA */}

                        {/*INICIO DE MENU CONTEXTUAL */}

                        <BlackMenu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                opacity: { xs: '1', md: '0' },

                            }}

                        >

                            {pages.map((page) => (
                                <MenuItem key={`mi${page.category}`} onClick={handleCloseNavMenu}>
                                    <ButtonLink
                                        component={NavLink}
                                        to={page.category}
                                        key={`bm${page.category}`}
                                        style={({ isActive }) => isActive ? active : disactive}
                                        onClick={handleCloseNavMenu}

                                    >{page.title}</ButtonLink>



                                </MenuItem>
                            ))}
                            {
                                totalPlus() > 0 &&
                                <MenuItem key={`miCarrito`} onClick={handleCloseNavMenu}>
                                    <ButtonLink
                                        component={NavLink}
                                        to='/cart'
                                        key={'bmcarrito'}
                                        onClick={handleCloseNavMenu}

                                    >CARRITO <CartWidjet quantity={totalPlus()} /></ButtonLink>


                                </MenuItem>
                            }
                        </BlackMenu>
                    </Box>
                    {/*FIN  DE MENU CUANDO LA PANTALLA ESTA EN XS (MOBILE)*/}

                    {/*CATEGORIAS CUANDO LA PANTALLA ESTA EN MD(DESKTOP)*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <MenuItem key={`mi${page.category}`} onClick={handleCloseNavMenu}>
                                <ButtonLink
                                    component={NavLink}
                                    to={page.category}
                                    key={`bm${page.category}`}
                                    style={({ isActive }) => isActive ? active : disactive}
                                    onClick={handleCloseNavMenu}

                                >{page.title}</ButtonLink>

                            </MenuItem>
                        ))}
                        {totalPlus() > 0 &&
                            <ButtonLink
                                key={5}
                                component={NavLink}
                                style={({ isActive }) => isActive ? active : disactive}
                                to='/cart'
                            >
                                <CartWidjet quantity={totalPlus()} />
                            </ButtonLink>}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>


                        {isLogin && (credential !== null && credential.displayName !== null) ?

                            <Tooltip title={credential.displayName}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={credential.displayName} src={credential.photoURL} sx={{ backgroundColor: '#e65100' }}>{credential?.displayName?.length > 0 && credential?.displayName[0]}</Avatar>
                                </IconButton>
                            </Tooltip>

                            :
                            <Breadcrumbs aria-label="breadcrumb" color='white'>
                                <ButtonLink
                                    onClick={handleOpenRegister}
                                >
                                    registrarse
                                </ButtonLink>
                                <ButtonLink
                                    onClick={handleOpenLogin}
                                >
                                    ingresar
                                </ButtonLink>

                            </Breadcrumbs>

                        }

                        <BlackMenu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {isAdmin &&
                                <MenuItem key={`mmdashboard`} onClick={handleCloseUserMenu}>
                                    <ButtonLink
                                        component={NavLink}
                                        to={`/admin`}
                                        key={`bmdashboard`}
                                        style={({ isActive }) => isActive ? active : disactive}
                                        onClick={handleCloseUserMenu}

                                    >Dashboard</ButtonLink>
                                </MenuItem>
                            }
                            {settings.map((setting) => (
                                <MenuItem key={`mm${setting.operation}`} onClick={handleCloseUserMenu}>
                                    <ButtonLink
                                        key={`bm${setting.operation}`}
                                        onClick={() => indexOperation(setting.operation)}

                                    >{setting.title}</ButtonLink>
                                </MenuItem>
                            ))}

                        </BlackMenu>
                    </Box>
                </Toolbar>
            </Container>

            <Modal
                open={openLogin}
                onClose={handleCloseLogin}

            >


                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ingresar
                    </Typography>
                    <LogIn handle={handleCloseLogin} />
                </Box>
            </Modal>

            <Modal
                open={openRegister}
                onClose={handleCloseRegister}

            >


                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Registro
                    </Typography>
                    <Register handle={handleCloseRegister} />
                </Box>
            </Modal>
        </AppBar >












    );
}