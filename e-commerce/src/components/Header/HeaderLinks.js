/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import {isAuthenticated , signout} from '../../helper/auth';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  let links;
  // const [categories , setCategories] = useState([]);

  const handlesignout = () =>{
    signout(()=>{
      props.history.push('/');
    })
  };

 

  if(isAuthenticated()){
    return (<List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button style={{margin:"5px"}}
          color="primary"
          target="_blank"
          className={classes.navLink}
        > <Link to = '/products' style = {{color:'white'}}>All Products</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button style={{margin:"5px" , color: "white"}}
          color="primary"
          target="_blank"
          className={classes.navLink}
          onClick = {handlesignout}
        > SignOut
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button style={{margin:"5px"}}
          color="primary"
          target="_blank"
          className={classes.navLink}
          buttonicon = {ShoppingCartIcon}
    > <Link to = '/cart' style = {{color:'white'}}>Cart</Link>
     
        </Button>
      </ListItem>
      
      {
        isAuthenticated().user.role===1 && 
        <ListItem className={classes.listItem}>
        <Button style={{margin:"5px"}}
          color="primary"
          target="_blank"
          className={classes.navLink}
        > <Link to = '/admin' style = {{color:'white'}}>Admin</Link>
        </Button>
      </ListItem>
      }
    </List>)
  }else{
    return(
      <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button style={{margin:"5px"}}
          color="primary"
          target="_blank"
          className={classes.navLink}
        > <Link to = '/login' style = {{color:'white'}}>Sign-In</Link>
        </Button>
      </ListItem>
    </List>
    )
  }
  // return (
  //   // <List className={classes.list}>
  //   //   {/* <ListItem className={classes.listItem}>
  //   //     <CustomDropdown
  //   //       noLiPadding
  //   //       buttonText="Baby-Products"
  //   //       buttonProps={{
  //   //         className: classes.navLink,
  //   //         color: "transparent"
  //   //       }}
  //   //       buttonIcon={Apps}
  //   //       dropdownList={[
  //   //         <Link to="/" className={classes.dropdownLink}>
  //   //           All Beauty Products
  //   //         </Link>,
  //   //         <Link to="/" className={classes.dropdownLink}>
  //   //           Hair Products
  //   //         </Link>,
  //   //           <Link to="/" className={classes.dropdownLink}>
  //   //           Nail Products
  //   //         </Link>,
  //   //         <Link to="/" className={classes.dropdownLink}>
  //   //         Skin Care Products
  //   //       </Link>,
  //   //       ]}
  //   //     />
  //   //     */}
  //   //   <ListItem className={classes.listItem}>
  //   //     <Button
  //   //       href="/products"
  //   //       color="transparent"
  //   //       target="_blank"
  //   //       className={classes.navLink}
  //   //     > Baby-Products
  //   //     </Button>
  //   //   </ListItem>
      
  //   //   {/* <ListItem className={classes.listItem}>
  //   //   <Tooltip title="Delete">
  //   //       <IconButton aria-label="Delete">
  //   //         <DeleteIcon />
  //   //       </IconButton>
  //   //     </Tooltip>
  //   //     <Tooltip
  //   //       id="instagram-twitter"
  //   //       title="Follow us on twitter"
  //   //       placement={window.innerWidth > 959 ? "top" : "left"}
  //   //       classes={{ tooltip: classes.tooltip }}
  //   //     >
  //   //       <Button
  //   //         href="https://twitter.com/CreativeTim?ref=creativetim"
  //   //         target="_blank"
  //   //         color="transparent"
  //   //         className={classes.navLink}
  //   //       >
  //   //         <i className={classes.socialIcons + " fab fa-twitter"} />
  //   //       </Button>
  //   //     </Tooltip>
  //   //   </ListItem>
  //   //   <ListItem className={classes.listItem}>
  //   //     <Tooltip
  //   //       id="instagram-facebook"
  //   //       title="Follow us on facebook"
  //   //       placement={window.innerWidth > 959 ? "top" : "left"}
  //   //       classes={{ tooltip: classes.tooltip }}
  //   //     >
  //   //       <Button
  //   //         color="transparent"
  //   //         href="https://www.facebook.com/CreativeTim?ref=creativetim"
  //   //         target="_blank"
  //   //         className={classes.navLink}
  //   //       >
  //   //         <i className={classes.socialIcons + " fab fa-facebook"} />
  //   //       </Button>
  //   //     </Tooltip>
  //   //   </ListItem>
  //   //   <ListItem className={classes.listItem}>
  //   //     <Tooltip
  //   //       id="instagram-tooltip"
  //   //       title="Follow us on instagram"
  //   //       placement={window.innerWidth > 959 ? "top" : "left"}
  //   //       classes={{ tooltip: classes.tooltip }}
  //   //     >
  //   //       <Button
  //   //         color="transparent"
  //   //         href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
  //   //         target="_blank"
  //   //         className={classes.navLink}
  //   //       >
  //   //         <i className={classes.socialIcons + " fab fa-instagram"} />
  //   //       </Button>
  //   //     </Tooltip>
  //   //   </ListItem> */}
  //   // </List>
  //   {links}
  // );
}
