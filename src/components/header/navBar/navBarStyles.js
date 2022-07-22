import { Button, Menu, styled } from '@mui/material';



export const ButtonLink = styled(Button)`
           
color: white;
my: 1;
margin: 0;
padding: 0;

:hover {
 color: red;
}
`;


export const BlackMenu = styled((Menu))(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: '#00000090',
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,

    },
}));

export const NavBarStyles = () => {



    return {
        appBarContainer: {
            backgroundColor: "black"
        },
        isoLogotype: {
            mr: 1,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            minWidth: '7.6rem'
        },
        menuMobile: {
            flexGrow: 1, display: { xs: 'flex', md: 'none' }
        }
    }
}