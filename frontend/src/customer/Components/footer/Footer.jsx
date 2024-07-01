import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h5" gutterBottom>
          Vignesh Hanlooms
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          About
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Location
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          SocialMedia
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Partnership with Wishlistz
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h5" gutterBottom>
          Wishlistz
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          SocialMedia
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Contact : 6238718440,9446976017
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Mobile Application
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          email :  vigneshhandloomoffical@gmail.com
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Support
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Men's
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Shirts
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Dhothies
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Men's Kurtha
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Phants
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Others...
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Women's
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Kerala Saree
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Pattu Saree
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Choridhar
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Tops
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Others...
        </Typography>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Wishlistz
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Co-Powered by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            VigneshHandlooms
          </Link>{' '}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
