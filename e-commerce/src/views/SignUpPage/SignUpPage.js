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
import {Link} from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/bg7.jpg";
// import acac from ''

const useStyles = makeStyles(styles);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignUpPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
});
const [open, setOpen] = React.useState(false);

const handleChange = name => event => {
  setValues({ ...values, error: false, [name]: event.target.value });
};

 const signup = user => {
  return fetch(`${process.env.REACT_APP_API}/signup`, {
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

const handleSubmit = e=>{
  e.preventDefault();
  setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
                setOpen(true);
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: 'New Account Created Please Login In..',
                    success: true
                });
                setOpen(true)
            }
            // console.log(data)
        });
}

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};
const { name, email, password, success, error } = values;
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="E-Stores"
        rightLinks={<HeaderLinks {...props}/>}
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
          <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
            <Alert onClose={handleClose} severity={success ? "success" : "error"}>
              {error}
            </Alert>
          </Snackbar>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>SignUp</h4>
                  </CardHeader>
                    {/* <p className={classes.divider} styles = {{color:'red'}}>{error}</p> */}
                   <Link to='/login'><p className={classes.divider}>Click Here to Login</p></Link>     
                  <CardBody>
                    <CustomInput
                      labelText="Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <People className={classes.inputIconsColor} />
                        //   </InputAdornment>
                        // )
                        onChange:handleChange('name'),
                        value : name
                      }}
                    />
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
                        onChange:handleChange('email'),
                        value : email
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
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Icon className={classes.inputIconsColor}>
                        //       lock_outline
                        //     </Icon>
                        //   </InputAdornment>
                        // ),
                        autoComplete: "off",
                        onChange:handleChange('password'),
                        value : password
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="primary" size="lg" onClick = {handleSubmit}>
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
