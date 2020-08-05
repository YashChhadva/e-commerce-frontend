import React , {useEffect , useState} from 'react';
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import Parallax from "../../components/Parallax/Parallax.js";
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import { isAuthenticated } from "../../helper/auth";
import {createProduct, createCategory , getCategories} from "./adminfunctions"; 
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AddCategory from './Dashboard/components/AddCategory';
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from './Dashboard/components';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}




const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const Dashboard = (props) => {
  const classes = useStyles();
  //     const classes = useStyles();
    const { ...rest } = props;


    const [values, setValues] = React.useState({
      categoryName:'',
      error: '',
      success: false,

  });

 
  const [open, setOpen] = React.useState(false);



 const handleSubmit = e => {
  e.preventDefault();
  createCategory(user._id, token, {name:categoryName}).then(data => {
    console.log(data)
      if (data.error) {
          setValues({
            ...values,
            error:data.error,
            success:false,
            categoryName:'',
          });
          setOpen(true)
      } else {
          setValues({
            ...values,
            error:'New Category Created',
            success:true,
            categoryName:''
          });
          setOpen(true);
      }
  });
  // console.log(categoryName);
  // console.log(allCategories())

};
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };
const {  success, error , categoryName } = values;

const { user, token } = isAuthenticated();


const handleChange = name => event => {
  setValues({ ...values, error: false, [name]: event.target.value });
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
         <div className={classes.container}></div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} style={{padding:"20px"}}>
            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                <Alert onClose={handleClose} severity={success ? "success" : "error"}>
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
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid>
        <Grid
          item
          // justify='center'
          lg={5}
          md={12}
          xl={9}
          xs={12}
        >
          {/* <LatestSales /> */}
          <AddCategory handleSubmit={handleSubmit} categoryName={categoryName} handleChange = {handleChange}/>
        </Grid>
        <Grid
          item
          lg={5}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <LatestProducts />
          {/* <AddCategory/> */}
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders />
        </Grid>
        <Grid
          item
          
          lg={3}
          md={3}
          xl={3}
          xs={3}
        >
          {/* <AddProduct handleChange={handleProductChange} handleSubmit={handleProductSubmit}category = {category} categories = {categories}name={name} description={description} price={price} reducedPrice={reducedPrice} quantity={quantity} /> */}
        {/* <Link to='/admin/addproduct'>Add Product</Link> */}
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default Dashboard;
