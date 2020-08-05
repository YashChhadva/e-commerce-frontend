import React , {useEffect , useState} from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import landingstyles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import Parallax from "../../components/Parallax/Parallax.js";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
// import GridContainer from "../../components/Grid/GridContainer.js";
// import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import loginstyles from "../../assets/jss/material-kit-react/views/loginPage.js";
// import as from '../../../../components/c'
// import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import switchstyles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { isAuthenticated } from "../../helper/auth";
import {updateProduct, getCategories , getProduct} from "../AdminPage/adminfunctions"; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import AddCategory from './Dashboard/components/AddCategory';
// import AddProduct from './Dashboard/components/AddProduct';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';


// // import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
// import {Link , Redirect} from 'react-router-dom';

// const dashboardRoutes = [];
// const useStyles = makeStyles(styles);

const loginStyles = makeStyles(loginstyles);
const useswitchstyles = makeStyles(switchstyles);

const useStyles2 = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}




const dashboardRoutes = [];
const landingStyles = makeStyles(landingstyles);




// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(4)
//   }
// }));

const AddProductPage = (props) => {
  const classes4 = landingStyles();
  //     const classes = useStyles();
  const classes = loginStyles();
  const classes2 = useswitchstyles();
  const classes3 = useStyles2();
    const { ...rest } = props;


 
  const [productvalues, setproductvalues] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    shipping: true,
    quantity: '',
    photo: '',
    producterror: '',
    createdProduct: '',
    // redirectToProfile: false,
    formData: '',
    reducedPrice:'',
    success : '',
    error:'',
});
const [categories , setCategories] = useState([]);
// useEffect(() => {
//     init();
// }, []);


const {
  name,
  description,
  price,
//   categories,
  category,
  shipping,
  quantity,
//   producterror,
  reducedPrice,
  createdProduct,
  formData,
  success,
  error,

} = productvalues;
  const [openbar, setOpenbar] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [checkedA, setCheckedA] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSubmit = event => {
    event.preventDefault();
    setproductvalues({ ...productvalues, producterror: ''});

    updateProduct(props.match.params.productId,user._id, token, formData).then(data => {
        if (data.error) {
            setproductvalues({ ...productvalues, error: data.error , success:false });
            setOpenbar(true);
        } else {
            setproductvalues({
                ...productvalues,
                name: '',
                description: '',
                photo: '',
                price: '',
                quantity: '',
                reducedPrice:'',
                createdProduct: data.name,
                error: `Product Updated Successfully!`,
                success:true,
            });
            setOpenbar(true);
        }
    });
    // console.log(productvalues);
    // console.log(formData)
};

const init = () => {
  getProduct(props.match.params.productId).then(data => {
    if (data.error) {
        setproductvalues({ ...productvalues, error: data.error , success:false });
    } else {
        // populate the state
        setproductvalues({
            ...productvalues,
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category._id,
            shipping: data.shipping,
            quantity: data.quantity,
            reducedPrice:data.reducedPrice,
            formData: new FormData()
        });
        // load categories
        // initCategories();
    }
});


// console.log(productvalues)

};

// useEffect(()=>{
//     console.log(productvalues)
// },[productvalues])

useEffect(() => {
    init();
    
    getCategories().then(data => {
    if (data.error) {
        setproductvalues({ ...productvalues, error: data.error });
    } else {
        setCategories(data);
        //   formData.set('shipping' , true);
    }
    });

}, [props]);

  
  const handlebarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpenbar(false);
  };

const { user, token } = isAuthenticated();


const handleChange = name => event => {
  const value = name === 'photo' ? event.target.files[0] : event.target.value;
  formData.set(name, value);
  formData.set('shipping' , true);
  setproductvalues({ ...productvalues, [name]: value });
};
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
         <div className={classes4.container}></div>
      </Parallax>
      <div className={classNames(classes4.main, classes4.mainRaised)} style={{padding:"20px"}}>
            <Snackbar open={openbar} autoHideDuration={1500} onClose={handlebarClose}>
                <Alert onClose={handlebarClose} severity={success ? "success" : "error"}>
                   {error}
                 </Alert>
               </Snackbar>
      <Grid
        container
        spacing={4}
        justify='center'
      >
        <Grid
          item
          
          lg={8}
          md={8}
          xl={8}
          xs={8}
        >
          <Card>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Product</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Product Name..."
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                       
                        onChange :handleChange('name'),
                        value:name
                      }}
                    />
                    <CustomInput
                      labelText="Description"
                      id="desc"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                       
                        onChange :handleChange('description'),
                        value:description
                      }}
                    />
                            <div>
                                <Button onClick={handleClickOpen}>Select Category</Button>
                                <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                                    <DialogTitle>Select Category</DialogTitle>
                                    <DialogContent>
                                    <form className={classes3.container}>
                                       
                                        <FormControl className={classes3.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-dialog-select-label"
                                            id="demo-dialog-select"
                                            value={category}
                                            onChange={handleChange('category')}
                                            input={<Input />}
                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            
                                             {categories &&
                                                categories.map((c, i) => (     
                                                <MenuItem key={i} value={c._id}>{c.name}</MenuItem>
                                            ))}
                                        </Select>
                                        </FormControl>
                                    </form>
                                    </DialogContent>
                                    <DialogActions>
                                    
                                    <Button onClick={handleClose} color="primary">
                                        Ok
                                    </Button>
                                    </DialogActions>
                                </Dialog>
            </div>
                    <CustomInput
                      labelText="Price"
                      id="price"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "Number",
                 
                        onChange :handleChange('price'),
                        value:price
                      }}
                    />
                    <CustomInput
                      labelText="Reduced Price"
                      id="redprice"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "Number",
                       
                        onChange :handleChange('reducedPrice'),
                        value:reducedPrice
                      }}
                    />
                    <CustomInput
                      labelText="Quantity"
                      id="qty"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "Number",
                    
                        onChange :handleChange('quantity'),
                        value:quantity
                      }}
                    />
                  
                    <CustomInput
                      labelText="Image"
                      id="photo"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange:handleChange('photo'),
                        type:"file",
                        name:"photo",
                        accept:"image/*"
                      }}
                    />
                    
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick = {handleSubmit}>
                      Add Product
                    </Button>
                  </CardFooter>
                </form>
              </Card>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default AddProductPage;
