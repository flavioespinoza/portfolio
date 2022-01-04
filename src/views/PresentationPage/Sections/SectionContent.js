import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.js";
// images
import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg";
import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg";
import presentationiPadTable from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg";

const useStyles = makeStyles(contentStyle);
export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>My Code</h3>
              <div className="item">
                <a href="https://gitlab.com/flavio.espinoza/node-14-react-17-seed" target="_blank" className="link">
                  Node React Seed
                </a>
              </div>
              <div className="item">
                <a href="https://gitlab.com/flavio.espinoza/unique-by-set" target="_blank" className="link">
                  Unique by Set
                </a>
              </div>
              <div className="item">
                <a href="https://github.com/flavioespinoza/datedash" target="_blank" className="link">
                  datedash
                </a>
              </div>
              <div className="item">
                <a href="https://github.com/flavioespinoza/scanner" target="_blank" className="link">
                  Scanner
                </a>
              </div>
              <div className="item">
                <a href="https://github.com/flavioespinoza/edge-css" target="_blank" className="link">
                  Edge CSS
                </a>
              </div>
              <div className="item">
                <a href="https://gitlab.com/flavio.espinoza/react-redux-data-table" target="_blank" className="link">
                  React Redux Data Table
                </a>
              </div>
            </div>
          </GridItem>
          <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="animate__fadeInUp">
                  <img
                    src={presentationiPadComments}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeInfoImg}>
                <ScrollAnimation animateIn="animate__fadeInUp">
                  <img
                    src={presentationiPadTable}
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                </ScrollAnimation>
              </div>
              <img
                className={classes.ipadImg}
                src={presentationiPad}
                alt="iPad"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
