import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin:'auto',
    width:'80%',
    height:'100%',
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  outer:{
      height:'40vh',
      paddingTop : '10px'
  },
  image:{
      boxFit:'cover',
      width: '50%'
  }
}));

export default function HorizontalCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <div className={classes.outer}>
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h3">
            All New Beauty Products
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Upto 60% off on all our brands
          </Typography>
          <Button size="small" variant="outlined" color="secondary">Shop Now!</Button>
        </CardContent>
        
      </div>
      <img src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80" className={classes.image}/>
      
    </Card>
    </div>
  );
}
