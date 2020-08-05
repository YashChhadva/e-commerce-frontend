import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// core components
// import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../../../components/CustomButtons/Button.js";
import Card from "../../../../components/Card/Card.js";
import CardBody from "../../../../components/Card/CardBody.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import CardFooter from "../../../../components/Card/CardFooter.js";
import CustomInput from "../../../../components/CustomInput/CustomInput.js";

import styles from "../../../../assets/jss/material-kit-react/views/loginPage.js";
// import as from '../../../../components/c'
const useStyles = makeStyles(styles);


export default function AddCategory(props){
    // const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const { ...rest } = props;
    const classes = useStyles();
    return(
        <Card>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Category</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Category Name..."
                      id="newcategory"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange :props.handleChange('categoryName'),
                        value:props.categoryName
                      }}
                    />
                    
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={props.handleSubmit}>
                      Add Category
                    </Button>
                  </CardFooter>
                </form>
              </Card>
    );
}