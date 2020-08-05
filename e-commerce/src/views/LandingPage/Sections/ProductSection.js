import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Vision</h2>
          <h5 className={classes.description}>
          One of the top 10 exclusive online player in India; to service the aspirations of population of mid tier cities and rural economy; by providing quality products at competitive price
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Mission</h2>
          <h5 className={classes.description}>
          Best in class institution with focus on customer centricity, continuous innovation and build everlasting partnership with various stakeholders

          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <InfoArea
              title="Free Chat"
              description="Our team members are always here to help you 24/7 to listen to all your queries"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={6} md={6}>
            <InfoArea
              title="Fingerprint"
              description="At no point will your data ever will be leaked ensuring complete privacy from our side."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
