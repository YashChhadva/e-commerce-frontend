import React , {useState,useEffect} from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/oneproductpage.js";
import styles2 from "../../assets/jss/material-kit-react/views/ProductsPageSections/ProductStyle";
import classNames from "classnames";
import Parallax from "../../components/Parallax/Parallax.js";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
// import Footer from "../../components/Footer/Footer.js";
// import GridContainer from "../../components/Grid/GridContainer.js";
// import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
// import Card from '@material-ui/core/Card';
// import CardBody from "../../components/Card/CardBody.js";
// import CardHeader from "../../components/Card/CardHeader.js";
// import aca from '../../'
// import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import { isAuthenticated } from "../../helper/auth";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
// import c from '../../'
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import {addItem} from '../CartPage/Cartfunctions';
import {Link , Redirect} from 'react-router-dom';

// import { createCategory , allCategories} from "./adminfunctions"; 
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import AddCategory from './Dashboard/components/AddCategory'
// import LocalMallIcon from '@material-ui/icons/LocalMall';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Product from './product.js';
// import './productstyle.css';


import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {read , listRelated} from '../../apifunctions';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);




// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(4)
//   }
// }));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const OneProduct = (props) => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const imageClasses = classNames(
    classes2.imgRaised,
    classes2.imgRounded,
    classes2.imgFluid
  );
  //     const classes = useStyles();
    const { ...rest } = props;
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error,setError] = useState('')
    const [open, setOpen] = React.useState(false);
    // const productId = props.match.params.productid;


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

    const loadSingleProduct = productId => {
      read(productId).then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setProduct(data);
              // fetch related products
              listRelated(data._id).then(data => {
                  if (data.error) {
                      setError(data.error);
                  } else {
                      setRelatedProduct(data);
                  }
              });
          }
      });
  };

  useEffect(() => {
      const productId = props.match.params.productId;
      loadSingleProduct(productId);
  }, [props]);


  var products = relatedProduct.map(product => 
    <GridItem xs={6} sm={6} md={3}>
        <Card style={{minHeight:'400px', backgroundColor:'#ede5ff'}}>
          <GridItem xs={12} sm={12} md={6} className={classes2.itemGrid}>
            <img src={`${process.env.REACT_APP_API}/product/photo/${product._id}`} alt={product.name} className={imageClasses} />
          </GridItem>
          <h4 className={classes2.cardTitle}>
                {product.name}
          </h4>
          <CardBody>
            <p>
                    {product.description}                       
            </p>
          </CardBody>
          <CardFooter style = {{display:'flex' , flexFlow:'column',alignItems:'center'}}>
                <div style = {{display:'flex' , flexFlow:'row'}}>
                    <p>price:</p>
                    <p className={classes2.price}>{product.price}</p>
                    <p className={classes2.reducedprice}>{product.reducedPrice}</p>
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
   <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="E-stores"
        rightLinks={<HeaderLinks {...props}/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
         <div className={classes.container}></div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} style={{padding:"20px"}}>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Item Added to the Cart
            </Alert>
          </Snackbar>
      <Grid
        container
        spacing={0}
        // style={{width:"80%"}}
      >
        
        <div>
          <Product product = {product}  handleCart = {handleCart}/>
          {/* {JSON.stringify(product.category)} */}
        </div>
        </Grid>

        <h2 style={{color:'black'}}>Related Products From The Same Category</h2>
        <GridContainer>
          {products}
        </GridContainer>

      
    </div>
    </div>
  );
};

export default OneProduct;
