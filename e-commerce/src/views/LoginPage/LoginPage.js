import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import {Link , Redirect} from 'react-router-dom';

import image from "../../assets/img/bg7.jpg";
// import acac from ''

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    error: '',
    success: false,
    loading:false
});

const handleChange = name => event => {
  setValues({ ...values, error: false, [name]: event.target.value });
};

const signup = user => {
  return fetch(`${process.env.REACT_APP_API}/signin`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then(response => {
          return response.json();
      })
      .catch(err => {
          console.log(err);
      });
};

// const redirect = ()=>{
//   <Redirect to='/products'/>
// };

const handleSubmit = e=>{
  e.preventDefault();
  setValues({ ...values, error: false  , loading:true});
        signup({email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false ,loading:false});
            } else {
                setValues({
                    // ...values,
                    // name: '',
                    // email: '',
                    // password: '',
                    // error: 'New Account Created Please Login In..',
                    success: true,
                    loading:false
                });

                authenticate(data , () =>{
                  props.history.push('/products');
                })
             
            }
            // console.log(data)
        });
}

const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
      localStorage.setItem('jwt', JSON.stringify(data));
      next();
  }
};


const { email, password, success, error , loading } = values;
  const classes = useStyles();
  const { ...rest } = props;
  if (loading) {
    return <h2>loading...</h2>
  }else{
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="E-stores"
        // rightLinks={<HeaderLinks {...props}/>}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <p className={classes.divider}>Dont Have An Account</p>
                  <Link to='/signup'><p className={classes.divider}>Click Here to SignUp</p></Link>
                  <p className={classes.divider} styles = {{color:'red'}}>{error}</p>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Email className={classes.inputIconsColor} />
                        //   </InputAdornment>
                        // )
                        onChange :handleChange('email'),
                        value:email
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        autoComplete: "off",
                        onChange:handleChange('password'),
                        value:password
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick = {handleSubmit}>
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
}
