import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import clsx from 'clsx';
import FaceIcon from '@material-ui/icons/Face';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import DevicesIcon from '@material-ui/icons/Devices';
// import HorizontalCard from '../components/home_bigCard';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    // width:'80%'
  },

  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    width: '80%',
    margin: 'auto',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 5,
    // fontWeight: 'bold'
    textDecoration:'none',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  root: {
    height: "100vh",
  },



}));



export default function Navbar(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        <ListItem button key='beauty'>
          <ListItemIcon><FaceIcon /></ListItemIcon>
          <ListItemText primary='beauty' />
        </ListItem>
        <ListItem button key='Homekitchen'>
          <ListItemIcon><LocalDiningIcon /></ListItemIcon>
          <ListItemText primary='Home & Kitchen' />
        </ListItem>
        <ListItem button key='Babyproducts'>
          <ListItemIcon><ChildCareIcon /></ListItemIcon>
          <ListItemText primary='Baby Products' />
        </ListItem>
        <ListItem button key='Mobile & Tablet Accessories'>
          <ListItemIcon><DevicesIcon /></ListItemIcon>
          <ListItemText primary='Mobile & Tablet Accessories' />
        </ListItem>
        <ListItem button key='others'>
          <ListItemText primary='Others' />
        </ListItem>
      </List>
    </div>
  );

  const sections = [
    { title: 'All', url: '/products' },
    { title: 'Beauty',url: '/beautyproducts' },
    { title: 'Home & Kitchen',url: '/homeandkitchenproducts' },
    { title: 'Baby Products', url: '/babyproducts' },
    { title: 'Mobile & Tablet Accessories',url: '/mobileandtabletproducts' },
    { title: 'Others', url: '/otherproducts'},
  ];
  const title = 'E-Stores';

  return (
    <div>
      {/* <div className={classes.root}> */}
      {/* <img src='https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' className={classes.backimage}/> */}
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
      <Toolbar className={classes.toolbar}>
        <MenuIcon onClick={toggleDrawer('left', true)} />
        <Typography
          component="h2"
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to='/' style={{textDecoration:'none' , color:'black'}}>
          {title}
          </Link>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            key={section.title}
            to = {section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      {/* <div className={classes.desc}>
        <Typography variant="h5" gutterBottom align='center'>
                One of the top 10 exclusive online player in India; to service the aspirations of population of mid tier cities and rural economy; by providing quality products at competitive price
        </Typography>
        <Button variant="outlined" invert>Discover More</Button> */}
      {/* </div> */}
    </div>

  );
}


