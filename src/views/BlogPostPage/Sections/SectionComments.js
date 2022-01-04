import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import sectionCommentsStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionCommentsStyle.js';
const useStyles = makeStyles(sectionCommentsStyle);

export default function SectionComments() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h2 className={classes.title}>My Data Analytics</h2>
            <p className={classes.color555}>
            D3.js data analytics dashboards for executive business insights and sales reports.
            Proposed and implemented changing of hard-coded Elasticsearch queries to be saved in MongoDB as JSON removing the need for core applications to be redeployed.
            </p>
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                marginBottom: 100,
              }}>
              <iframe
                src="https://www.loom.com/embed/4410efad74e941759b5f7932b446d97a"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}></iframe>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
