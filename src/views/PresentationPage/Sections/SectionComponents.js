import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js";

import macbookImage from "assets/img/assets-for-demo/presentationViewSectionComponent/laptop-basics.png";
import shoppingCartImage from "assets/img/assets-for-demo/presentationViewSectionComponent/table.jpg";
import shareButtonImage from "assets/img/assets-for-demo/presentationViewSectionComponent/share-btn.jpg";
import cardImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg";
import twitterImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg";
import iconsImage from "assets/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg";
import repostImage from "assets/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg";

import openidImg from 'assets/img/openid-connect-authz-code-flow.png'

const useStyles = makeStyles(componentsStyle);

export default function SectionComponents() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem md={5} lg={5} sm={12} xs={12}>
          <h2 className={classes.title}>My Components</h2>
          <p className={classes.description}>
            {`React functional components are the core of my frontend implementations.`}
          </p>
          <h3 className={classes.subtitle}>Why React?</h3>
          <p className={classes.description}>
            {`I use React.js for all of my frontend components because it just works, and with the introduction of Hooks you can always use 
              functions instead of having to constantly switch between functions, classes, higher-order components, and render props.`}
          </p>
          <h3 className={classes.subtitle}>Code</h3>
          <p className={classes.description}>
            {`Check out my react code here: `} <a href={'https://gitlab.com/flavio.espinoza/node-14-react-17-seed'} target={'_blank'}>Node React Seed</a>
          </p>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
          <div className={classes.imageContainer}>
            <img
              src={macbookImage}
              alt="macbook"
              className={classes.componentsMacbook}
            />
            <img
              src={shoppingCartImage}
              alt="macbook"
              className={classes.shoppingCart}
            />
            <img
              src={shareButtonImage}
              alt="macbook"
              className={classes.shareButton}
            />
            <img
              src={cardImage}
              alt="macbook"
              className={classes.cardImage}
            />
            <img
              src={twitterImage}
              alt="macbook"
              className={classes.twitterImage}
            />
            <img
              src={iconsImage}
              alt="macbook"
              className={classes.iconsImage}
            />
            <img
              src={repostImage}
              alt="macbook"
              className={classes.repostImage}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
