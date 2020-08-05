import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
// import adcs from '../../'
import ProductCategories from './Sections/ProductsCategories'
import FirstCrousel from './Sections/FirstCrousel'
import ProductSection from '../LandingPage/Sections/ProductSection'
import TeamSection from '../LandingPage/Sections/TeamSection'
import WorkSection from '../LandingPage/Sections/WorkSection';
import CategoryOverview from './Sections/CategoryOverview';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
              Exclusively dealing in online space. Major player in beauty segment.
              Distribution across set up across Mumbai, Bangalore, Kolkata, and Delhi region.
              Leveraged on warehouses of market place for these locations for quicker and wider distribution.
              Necessary financial and storage infrastructure already in place 
              </h4>
              <br />
              <Button
                color="info"
                size="lg"
                rel="noopener noreferrer"
              >
                Join Our Community
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}><ProductCategories/></div>
          <CategoryOverview/>
          <ProductSection />
          <TeamSection />
          <WorkSection />
                
        </div>
      </div>
      <Footer />
    </div>
  );
}
