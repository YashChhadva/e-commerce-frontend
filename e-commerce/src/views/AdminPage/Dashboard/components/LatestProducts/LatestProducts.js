import React, { useState , useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {getProducts} from '../../../../../apifunctions';
import {Link} from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import mockData from './data';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestProducts = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [products, setProductsByArrival] = useState([]);

  // const [products] = useState(mockData);
  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
        console.log(data);
        if (data.error) {
            console.log(data.error);
        } else {
            setProductsByArrival(data);
        }
    });
};

useEffect(() => {
  loadProductsByArrival();
  // loadProductsBySell();
}, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest products"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {products.map((product, i) => (
            <ListItem
              divider={i < products.length - 1}
              key={product._id}
            >
              <ListItemAvatar>
                <img
                  alt="Product"
                  className={classes.image}
                  src={`${process.env.REACT_APP_API}/product/photo/${product._id}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={product.description}
              />
              {/* <IconButton
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton> */}
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Link to='/admin/manageproducts'>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
        </Link>
        <Link to='/admin/addproduct'>
        <Button color='primary' size='sm' style={{width:'100%'}}>Add Product</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
