import React , {UseState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/ProductsPageSections/ProductStyle";
import {Link , Redirect} from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {addItem} from '../../CartPage/Cartfunctions'

const useStyles = makeStyles(styles);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ProductsList(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  const [open, setOpen] = React.useState(false);

  const handleCart = product => e => {
    addItem(product , () =>{
      return <Redirect to='/cart'/>
  })
  setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };

  var products = props.products.map(product => 
        <GridItem xs={6} md={6} lg={3}>
            <Card style={{minHeight:'400px', backgroundColor:'#ede5ff'}}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={`${process.env.REACT_APP_API}/product/photo/${product._id}`} alt={product.name} className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                    {product.name}
              </h4>
              <CardBody style={{height:'40px' , overflow:'hidden'}}>
                <p>
                        {product.description}                       
                </p>
              </CardBody>
              <CardFooter style = {{display:'flex' , flexFlow:'column',alignItems:'center'}}>
                    <div style = {{display:'flex' , flexFlow:'row'}}>
                        <p>price:</p>
                        <p className={classes.price}>{product.price}</p>
                        <p className={classes.reducedprice}>{product.reducedPrice}</p>
                    </div>
                    {/* <div style = {{display:'flex' , flexFlow:'row'}}> */}
                      {/* <CardActions> */}
                      <Button color='warning' size='sm' onClick={handleCart(product)} fullWidth>Add to Cart</Button>
                      <Link to={`/product/${product._id}`} style={{width:'100%'}}>
                        <Button color='info' size='sm' fullWidth>View More</Button>
                      </Link>
                      {/* </CardActions> */}
                    {/* </div> */}
              </CardFooter>
            </Card>
          </GridItem>
    
    )
  return (
    <div className={classes.section}>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Item Added to the Cart
            </Alert>
          </Snackbar>
      <div>
        <GridContainer>
          {products}
        </GridContainer>
      </div>
    </div>
  );
}
