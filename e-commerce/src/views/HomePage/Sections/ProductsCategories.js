import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
// import { makeStyles } from "@material-ui/core/styles";
import Typography from '../components/Typography';
// import Typography from '../components/Typography'
// import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import {Link} from 'react-router-dom'

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});


// const useStyles = makeStyles(styles);

function ProductCategories(props) {

  const { classes } = props;

  const images = [
    {
      url:
        'https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      title: 'Beauty Products',
      width: '40%',
      link:'/products'
    },
    {
      url:
        'https://images.unsplash.com/photo-1578840602674-bd891cb7ea5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      title: 'Phone Covers',
      width: '20%',
      link:'/products'
    },
    {
      url:
        'https://images.unsplash.com/photo-1542317854-0a03f0e0c000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      title: 'HeadPhones',
      width: '40%',
      link:'/products'
    },
    {
      url:
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80',
      title: 'Home-Decor',
      width: '38%',
      link:'/products'
    },
    {
      url:
        'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80',
      title: 'Hair Products',
      width: '38%',
      link:'/products'
    },
    {
      url:
        'https://images.unsplash.com/photo-1558542086-b116634c8dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Baby Products',
      width: '24%',
      link:'/products'
    },
    {
      url:
        'https://images.unsplash.com/photo-1559371490-c76cf2b75eec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
      title: 'Cutlery',
      width: '40%',
      link:'/products'
    },
    {
      url:
        'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      title: 'Nail-Care',
      width: '20%',
      link:'/products'
    },
    {
      url:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
      title: 'About-Us',
      width: '40%',
      link:'/profile'
    },
  ];

  return (
    <Container>
        <br/>
        <br/>
      <Typography variant="h4" marked="center" align="center" component="h2">
                  
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
        
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
              <Link to={image.link} style={{color:'white'}}>
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
                
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                
                    {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
            </Link>
          </ButtonBase>
        ))}
      </div>
      <br/>
      <br/>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);