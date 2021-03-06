import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './button';
import Typography from './typo';
import ProductHeroLayout from './layout';

const backgroundImage =
  'https://cdn.downtoearth.org.in/library/large/2020-07-18/0.43229900_1595054679_assam-floods.jpg';

const styles = (theme) => ({

  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background} >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Flood Management App
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        All in one place for Flood relief and news 
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/signup/"
      >

        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);