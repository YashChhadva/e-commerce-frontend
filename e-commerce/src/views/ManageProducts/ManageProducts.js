import React , {useEffect,useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import {getProducts , deleteProduct} from '../../views/AdminPage/adminfunctions';
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {isAuthenticated} from '../../helper/auth';

import styles2 from "../../assets/jss/material-kit-react/views/ProductsPageSections/ProductStyle";
import {Link , Redirect} from 'react-router-dom';



const dashboardRoutes = [];



const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Home(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const { ...rest } = props;
  const [products, setProductsByArrival] = useState([]);
  const [categories,setCategories] = useState([]);
  const [checked, setCheked] = useState([]);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [delname,setDelname] = useState('');

  const imageClasses = classNames(
    classes2.imgRaised,
    classes2.imgRounded,
    classes2.imgFluid
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };

  const deleteone = productId => {
    deleteProduct(productId, user._id, token).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            setOpen(true);
            setTimeout(loadProductsByArrival , 2000);
            
        }
    });
};

const { user, token } = isAuthenticated();


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
//   init();
}, []);

// const init = () => {
//   getCategories().then(data => {
//       if (data.error) {
//           console.log(data.error)
//       } else {
//           setCategories(data);
//         //   formData.set('shipping' , true);
//       }
//   });
// };


var productslist = products.map(product => 
    <GridItem xs={6} sm={6} md={3}>
        <Card style={{minHeight:'400px', backgroundColor:'#ede5ff'}}>
          <GridItem xs={12} sm={12} md={6} className={classes2.itemGrid}>
            <img src={`${process.env.REACT_APP_API}/product/photo/${product._id}`} alt={product.name} className={imageClasses} />
          </GridItem>
          <h4 className={classes2.cardTitle} style={{margin:'auto'}}>
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
                  <Link to={`/admin/updateproduct/${product._id}`} style={{width:'100%'}}>
                  <Button color='warning' size='sm' fullWidth>Update</Button>
                  </Link>
                  <Button color='danger' size='sm' fullWidth onClick = {() => deleteone(product._id)}>Delete</Button>
                  <Link to={`/product/${product._id}`} style={{width:'100%'}}>
                    <Button color='info' size='sm' fullWidth >View More</Button>
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
        <div className={classes.container}>
          <GridContainer>
            
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>

      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              One Product Deleted 
            </Alert>
          </Snackbar>
        
        <div className={classes.container}>
            <GridContainer>
                {productslist}
            </GridContainer>
           {/* <ProductsList products={products}/> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
