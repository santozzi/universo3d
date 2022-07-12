import React, { useState, useContext } from 'react';
import { CartWidjet } from './cartWidjet/cartWidjet';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../cartContext/cartContext';
import { AuthWidjet } from '../authWidjet/authWidjet';
import { AuthContextService } from '../../services/auth.services';
//<---------------------INICIO MATERIAL UI------------------------------------->
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
//<-----------------------FIN MATERIAL UI------------------------------------->

export const NavBar = () => {
    //<-----------------------INICIO MATERIAL UI NAVBAR------------------->
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    //<-------------------------FIN MATERIAL UI NAVBAR-------------------->



    const [state, setstate] = useState(true);
    const { totalPlus } = useContext(CartContext);
    const { isLogin, isAdmin } = useContext(AuthContextService)

    const showNavBar = () => {
        state ? setstate(false) : setstate(true);

    }
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

    return (













        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>






                <Navbar.Toggle aria-controls='responsive-navbar-nav' />







                <Navbar.Brand>
                    <Link to="/" className={`navbar-logo-text${!state ? ' responsive-navbar-logo-text' : ''}`}>
                        <div>universo 3d</div>
                    </Link>

                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className='align-items-center'>
                        <Nav.Link>
                            <NavLink to="/" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/1" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Mates</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/3" style={({ isActive }) => (isActive ? active : disactive)} className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} >Llaveros</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/2" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Porta sahumerios</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/4" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Cortadores</NavLink>
                        </Nav.Link>

                        {isAdmin &&
                            <Nav.Link>
                                <NavLink to="/admin" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Dashboard</NavLink>
                            </Nav.Link>
                        }
                        {totalPlus() > 0 &&

                            <CartWidjet />

                        }

                        <NavDropdown title={<AuthWidjet />} id="collasible-nav-dropdown">

                            <NavDropdown.Item >Perfil/Ingresar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Cerrar Sesión/Crear cuenta</NavDropdown.Item>
                        </NavDropdown>
                        {/*
                            (state) ?
                                <button
                                    className={`navbar-btn navbar-btn-hidden ${state ? 'navbar-bars-btn' : 'responsive-navbar-bars-btn'}`}
                                    onMouseUp={showNavBar}
                                >
                                    <FaBars />
                                </button>
                                :
                                <button
                                    className={`navbar-btn navbar-btn-hidden${state ? ' navbar-close-btn' : ' responsive-navbar-close-btn'}`}
                                    onMouseUp={showNavBar}
                                >
                                    <FaTimes />
                                </button>
                        */}
                    </Nav>
                </Navbar.Collapse>


            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}