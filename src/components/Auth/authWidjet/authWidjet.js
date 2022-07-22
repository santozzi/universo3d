import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import anonymousAvatar from '../../images/anonymouseUser.jpg';
import { signInWithGoogleService, signOutService } from '../../../services/auth.services';
import { AuthContextService } from '../../../services/auth.services';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Button } from '@mui/material';
export const AuthWidjet = ({ handleProfileMenuOpen }) => {
    const { isLogin, isAdmin } = useContext(AuthContextService);

    const menuId = 'primary-search-account-menu';
    return (
        <>
            {isLogin ?
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    {isAdmin
                        ? <ManageAccountsIcon />
                        : <AccountCircle />
                    }
                </IconButton>
                : <Button sx={{ color: 'white' }} component={Link} to='/login'>
                    Ingresar
                </Button>
            }
        </>
    )
}
