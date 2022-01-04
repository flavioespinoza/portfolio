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

export default function SectionOpenID() {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{paddingTop: 100, paddingBottom: 60,}}>      
      <GridContainer>
        <GridItem xs={12}>
          <h2 className={classes.subtitle}>My Authentication and Authorization</h2>
          <p>
            <strong>Authentication</strong> and <strong>authorization</strong> might sound similar, but they are distinct security processes in the world of identity and access management (IAM). <strong>Authentication</strong> confirms that users are who they say they are. <strong>Authorization</strong> gives those users permission to access a resource.
          </p>
          <h3 className={classes.subtitle}>OpenID Connect & OAuth 2.0</h3>
          <p className={classes.description}>
            OpenID Connect extends OAuth 2.0. The OAuth 2.0 protocol provides API security via scoped access tokens, and OpenID Connect provides user authentication and single sign-on (SSO) functionality.
          </p>

          <h3 className={classes.subtitle}>Identity Provider</h3>
          <p className={classes.description}><span>An <b>identity provider</b>, or <b>OpenID provider</b> (OP) is a service that specializes in registering <b>OpenID</b> URLs or XRIs. <b>OpenID</b> enables an end-user to communicate with a relying party. ... An <b>identity provider</b> provides the <b>OpenID</b> authentication (and possibly other <b>identity</b> services).</span></p>

          <p><b>Identity providers</b> that I've used with my <span>OpenID Client</span> are:</p>
          <ul>
            <li>Okta</li>
            <li>PingOne</li>
          </ul>

          <h3 className={classes.subtitle}>Authorization Code flow</h3>
          <p className={classes.description}>
            The Authorization Code flow is best used by server-side apps where the source code isn't publicly exposed. The apps should be server-side because the request that exchanges the authorization code for a token requires a client secret, which has to be stored in your client. The server-side app requires an end user, however, because it relies on interaction with the end user's web browser, which redirects the user and then receives the authorization code.
          </p>

          <img src={openidImg}  alt={'openidImg'}/>

          <h3 id={'openid_client'} className={classes.subtitle}>OpenID Client</h3>
          <p className={classes.description}>
            {`Check out an implementation of my OpenID Client here: `} <a href={'https://gitlab.com/flavio.espinoza/node-14-react-17-seed'} target={'_blank'}>Node React Seed</a>
          </p>
          <br/>
          <br/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
