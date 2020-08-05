import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
// import cc from '../../../'
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Header from "../../../components/Header/Header.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../../components/CustomButtons/Button.js";

import image from "../../../assets/img/bg.jpg";
import profileImage from "../../../assets/img/faces/avatar.jpg";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function Filters(props){
    const classes = useStyles();
    return (
        <div>
        <div className={classes.title}>
          <h3>Navigation</h3>
        </div>
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >
          <Header
            brand="Brand"
            color="rose"
            leftLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Link
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Link
                  </Button>
                </ListItem>
              </List>
            }
            rightLinks={
              <div>
                <CustomInput
                  white
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{
                    className: classes.formControl
                  }}
                  inputProps={{
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                      className: classes.searchInput
                    }
                  }}
                />
                <Button justIcon round color="white">
                  <Search className={classes.searchIcon} />
                </Button>
              </div>
            }
          />
          </div>
          </div>
          </div>
    );
};