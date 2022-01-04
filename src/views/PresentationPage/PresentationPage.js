import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
// sections for this page

import SectionTeams from './Sections/SectionTeams';
import SectionAuth from './Sections/SectionAuth';
import SectionTestimonials from 'views/SectionsPage/Sections/SectionTestimonials.js';
import SectionDescription from 'views/PresentationPage/Sections/SectionDescription.js';
import SectionComponents from 'views/PresentationPage/Sections/SectionComponents.js';
import SectionOpenID from 'views/PresentationPage/Sections/SectionOpenID.js';
import SectionCards from 'views/PresentationPage/Sections/SectionCards.js';
import SectionContent from 'views/PresentationPage/Sections/SectionContent.js';
import SectionSections from 'views/PresentationPage/Sections/SectionSections.js';
import SectionExamples from 'views/PresentationPage/Sections/SectionExamples.js';
import SectionFreeDemo from 'views/PresentationPage/Sections/SectionFreeDemo.js';
import SectionOverview from 'views/PresentationPage/Sections/SectionOverview.js';
import SectionPricing from 'views/PresentationPage/Sections/SectionPricing.js';

import SectionComments from 'views/BlogPostPage/Sections/SectionComments.js';

// images and styles
import bgImg from 'assets/img/bg-crucible-side-view.jpg';
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  const [tagline] = React.useState("What I have can't be taught.");
  const [subtitle] = React.useState(
    'The development process is a crucible. In it we burn away irrelevancies until we are left with a pure product.',
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Flavio Espinoza"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'info',
        }}
      />
      <Parallax image={bgImg} className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <div className={classes.brand}>
                <h1>{tagline}</h1>
                <h3 className={classes.title}>{subtitle}</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>


      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionComponents />
      </div>

      <div name="my_data_analytics" id="my_data_analytics" style={{paddingTop: 120, paddingBottom: 80,}}>
        <SectionComments />
      </div>


      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={'p12'}>
        <SectionOpenID />
        </div>
      </div>
      <SectionTestimonials />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionContent />
      </div>
      <SectionTeams />
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.left}>
              <a
                href="https://gitlab.com/flavio.espinoza"
                target="_blank"
                className={classes.footerBrand}>
                My GitLab
              </a>
            </div>
            <div className={classes.left}>
              <a
                href="https://github.com/flavioespinoza"
                target="_blank"
                className={classes.footerBrand}>
                My GitHub
              </a>
            </div>
          </div>
        }
      />
    </div>
  );
}
