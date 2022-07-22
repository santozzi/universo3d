import { Box, Typography } from '@mui/material';
import React from 'react';
import { IsoLogotipo } from '../utils/iconos/logo/isoLogotipo';
import { FooterStyles as classes } from './footerStyles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ImStackoverflow } from 'react-icons/im';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={classes().footerContainer}>
      <Box sx={classes().tituloCatContactoContainer}>

        <Box sx={{ borderRight: '1px solid #cccccc55', padding: 4, paddingRight: 6 }} component={Link} to='/' aria-label='ir a inicio'>
          <IsoLogotipo size='80' color='cccccc80' />
        </Box>



        <Box sx={classes().categories} component='section' >
          <Box sx={{ margin: '0 0 0.8rem -1rem' }} component='h5'> <Typography variant="h5" component="p" aria-label='Sección categorías'>Categorías</Typography></Box>
          <Box component={Link} to='/category/1' sx={{ textDecoration: 'none', textAlign: 'left' }}><Typography variant="subtitle2" component="h6">Mates              </Typography> </Box>
          <Box component={Link} to='/category/2' sx={{ textDecoration: 'none', textAlign: 'left' }}><Typography variant="subtitle2" component="h6">Porta sahumerios   </Typography> </Box>
          <Box component={Link} to='/category/3' sx={{ textDecoration: 'none', textAlign: 'left' }}><Typography variant="subtitle2" component="h6">Llaveros           </Typography> </Box>
          <Box component={Link} to='/category/4' sx={{ textDecoration: 'none', textAlign: 'left' }}><Typography variant="subtitle2" component="h6">Cortadores de masa </Typography> </Box>
        </Box>
        <Box sx={{ ...classes().socialMedias, borderLeft: '1px solid #cccccc55', padding: 4 }}>
          <Box sx={{ color: '#cccccc' }}>
            <Box sx={{ margin: '0 0 0.8rem -1rem', color: 'white' }}><Typography variant="h5" component="h6">Powered By</Typography></Box>

            <Box sx={{ textDecoration: 'none', textAlign: 'left' }}><Typography variant="subtitle2" component="h6" sx={{ display: 'flex', alignItems: 'center' }}><AccountBoxIcon fontSize='small' sx={{ marginRight: '12px' }} />Sergio J. Antozzi </Typography> </Box>
            <Box sx={{ textDecoration: 'none', textAlign: 'left' }}><Typography variant="subtitle2" component="h6" sx={{ display: 'flex', alignItems: 'center' }}><LocalPostOfficeIcon fontSize='small' sx={{ marginRight: '12px' }} />santozzi@gmail.com </Typography> </Box>

          </Box>
          <Box sx={{ ...classes().socialMedias, flexDirection: 'column', gap: '0.5rem', }}>
            <a aria-label="linkedin de sergio antozzi" href='https://www.linkedin.com/in/sergio-antozzi-961891173/' target='_blank' rel="noreferrer"> <LinkedInIcon fontSize='large' /></a>
            <a aria-label="github de sergio antozzi" href='https://github.com/santozzi' target='_blank' rel="noreferrer"> <GitHubIcon fontSize='large' /></a>
            <a aria-label="stack overflow de sergio antozzi" href='https://es.stackoverflow.com/users/143438/sergio-antozzi' target='_blank' rel="noreferrer"> <ImStackoverflow size='30' /> </a>
          </Box>
        </Box>
      </Box>



    </Box >
  )
}
