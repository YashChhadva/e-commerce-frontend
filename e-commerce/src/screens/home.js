import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import HorizontalCard from '../components/home_bigCard';
import Navbar from '../components/navbar'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    // width:'80%'
  },

  root:{
       height:"100vh",    
  },

  backimage:{
      position:'absolute',
      top:0,
      left:0,
      height:'100vh',
      width:'100vw',
      zIndex:-1,
      opacity:"80%",
      objectFit:'cover'
  },


  desc:{
    //   display:'flex',
    display:'flex',
    flexDirection:"column",
    justifyContent:'space-between',
    alignItems:'center',
    margin:'auto',
    marginTop: '10%',
      width:"80%"

  },

//   spotlight : {
//       backgroundColor : 'rgb(235, 195, 232)'
//   }
}));



export default function Home(props) {
  const classes = useStyles();
  return (
      <div>
    <div className={classes.root}>
        <img src='https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' className={classes.backimage}/>
      <Navbar/>
      <div className={classes.desc}>
        <Typography variant="h5" gutterBottom align='center'>
                One of the top 10 exclusive online player in India; to service the aspirations of population of mid tier cities and rural economy; by providing quality products at competitive price
        </Typography>
        <Button variant="outlined" invert>Discover More</Button>
      </div>
    </div>
    {/* <div className={classes.spotlight}>
     <img /src='https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' className={classes.backimage}/> 
    <HorizontalCard/>
    <HorizontalCard/>
    <HorizontalCard/>
    </div> */}
    
    </div>
  );
}


