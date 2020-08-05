import React , {useEffect,useState} from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
// import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import { Grid } from '@material-ui/core';
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {getCart , itemTotal , removeItem} from './Cartfunctions'
import {getBraintreeClientToken} from '../../apifunctions';
import styles2 from "../../assets/jss/material-kit-react/views/ProductsPageSections/ProductStyle";
import classNames from "classnames";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import {isAuthenticated} from '../../helper/auth';
import DropIn from 'braintree-web-drop-in-react';



const dashboardRoutes = [];
const useStyles2 = makeStyles(styles2);



const useStyles = makeStyles(styles);

export default function CartPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const classes2 = useStyles2();
  const [totprice , setTotPrice] = useState(0);
  const [redprice , setRedPrice] = useState(0);

  const [data, setData] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: '',
    instance: {},
    address: ''
});
//   const theme = useTheme(); 
const [items,setItems] = useState([])
  const imageClasses = classNames(
    classes2.imgRaised,
    classes2.imgRounded,
    classes2.imgFluid
  );

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;
  const handleRemove = productid => e => {
      const cart = removeItem(productid);
      setItems(cart);
      // calc()
  };

  const calc = () => {
    let price = 0;
    let rprice = 0;
    items.map((item) =>{
      price+=item.price;
      rprice+=item.reducedPrice;
    });
    setTotPrice(price);
    setRedPrice(rprice);
  };


  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then(data => {
        if (data.error) {
            console.log(data.error);
            setData({ ...data, error: data.error });
        } else {
            console.log(data);
            setData({ clientToken: data.clientToken });
        }
    });
};


    useEffect(()=>{
        // console.log(getCart());
        setItems(getCart());
        getToken(userId, token);
        // calc();
    },[]);

    useEffect(() =>{
      calc();
    } , [items])


    const cartlist = items.map((product) => {
        return (
            <GridItem xs={6} sm={6} md={6}>
            <Card>
              <GridItem xs={12} sm={12} md={6} className={classes2.itemGrid}>
                <img src={`${process.env.REACT_APP_API}/product/photo/${product._id}`} alt={product.name} className={imageClasses} />
              </GridItem>
              <h4 className={classes2.cardTitle} style={{textAlign:'center'}}>
                    {product.name}
              </h4>
              <CardBody>
                <p style={{textAlign:'center'}}>
                        {product.description}                       
                </p>
              </CardBody>
              <CardFooter style = {{display:'flex' , flexFlow:'column',alignItems:'center'}}>
                    <div style = {{display:'flex' , flexFlow:'row'}}>
                        <p style={{marginRight:'4px' , height:'2em'}}>price:</p>
                        <p className={classes2.price}>{product.price}</p>
                        <p className={classes2.reducedprice}>{product.reducedPrice}</p>
                    </div>
                    <div style = {{display:'flex' , flexFlow:'row'}}>
                      <Button color='danger' size='lg' onClick={handleRemove(product._id)}>Remove</Button>
                    </div>
              </CardFooter>
            </Card>
          </GridItem>
        );
    }
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
        
        <div className={classes.container}>
        <Typography variant="h4" gutterBottom style={{color:'black' , textAlign:'center'}}>You have {itemTotal()} items in your Cart</Typography>
            <GridContainer>
                <GridItem
                     
                    xs={12}
                    sm = {12}
                    lg={8}
                    xl={8}
                >
                    <GridContainer>
                        {cartlist}
                    </GridContainer>

                </GridItem>
                <GridItem
                   xs={12}
                   sm = {12}
                   lg={4}
                   xl={4}
                >
                  <Card plain>
                  <p style={{fontSize:'3em' , color: "#999"}}>Total:</p>
              <h2 style={{fontWeight:'bold' , color:'black'}}>RS. {redprice}</h2>
                  <h4 style={{color: "#999", textDecoration: 'line-through'}}>RS. {totprice}</h4>
                  {
                    data.clientToken !== null && items.length > 0 ? (
                      <DropIn
                        options={{
                            authorization: data.clientToken,
                            // paypal: {
                            //     flow: 'vault'
                            // }
                        }}
                        onInstance={instance => (data.instance = instance)}
                    />
                    ): (<div></div>)
                    
                  }
                  <Button color='danger' size='lg' fullWidth>CheckOut</Button>
                  </Card>
                </GridItem>
            </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
