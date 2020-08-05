import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './screens/home';
// import Card from './components/home_bigCard'
import { ProductsList } from './screens/ProductsList'
// import LoginPage from "views/LoginPage/LoginPage.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import "./assets/scss/material-kit-react.scss?v=1.9.0";
// import ProfilePage from './views/ProfilePage/ProfilePage.js';
// import LoginPage from './views/LoginPage/LoginPage';
import Home from './views/HomePage/HomePage';
import ProductsPage from './views/ProductsPage/ProductsPage';
import SignUpPage from './views/SignUpPage/SignUpPage';
import LoginPage from './views/LoginPage/LoginPage';
import PrivateRoute from './helper/privateroute';
import AdminRoute from './helper/adminroute';
import theme from './views/AdminPage/theme';
import AdminPage from './views/AdminPage/AdminPage';
import { ThemeProvider } from '@material-ui/styles';
import { chartjs } from './views/AdminPage/helpers';
import { Chart } from 'react-chartjs-2';
import OneProduct from './views/OneProductPage/OneProductPage';
import AddProductPage from './views/AddProductPage/AddProductPage';
import CartPage from './views/CartPage/CartPage';
import ManageProducts from './views/ManageProducts/ManageProducts';
import UpdateProduct from './views/UpdateProductPage/UpdateProductPage'

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={LandingPage} />        
        <PrivateRoute exact path='/products' component={ProductsPage} />
        <PrivateRoute exact path='/cart' component={CartPage} />         
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/product/:productId' component={OneProduct} />


        <ThemeProvider theme = {theme}>
        <AdminRoute exact path='/admin' component={AdminPage} />
        <AdminRoute exact path='/admin/addproduct' component={AddProductPage} />
        <AdminRoute exact path='/admin/manageproducts' component={ManageProducts} />
        <AdminRoute exact path='/admin/updateproduct/:productId' component={UpdateProduct} />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
