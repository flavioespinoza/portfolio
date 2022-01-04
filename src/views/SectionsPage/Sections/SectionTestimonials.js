import React, {useState} from 'react'
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles'
// @material-ui/icons
import FormatQuote from '@material-ui/icons/FormatQuote'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import CardAvatar from 'components/Card/CardAvatar.js'

import quotes from "assets/js/quotes.js";

import testimonialsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.js'

import dg2 from 'assets/img/dg2.jpg'
import avatarKevin from 'assets/img/faces/kevin-burke.jpg'
import avatarMatt from 'assets/img/faces/matthew-sanders.jpg'
import avatarJulio from 'assets/img/faces/julio-morales.png'

const useStyles = makeStyles(testimonialsStyle)

export default function SectionTestimonials({...rest}) {
  const [kevinBurke] = useState(quotes({firstName: 'Kevin', lastName: 'Burke'}))
  const [mattSanders] = useState(quotes({firstName: 'Matthew', lastName: 'Sanders'}))
  const [julioMorales] = useState(quotes({firstName: 'Julio', lastName: 'Morales'}))
  const classes = useStyles()
  return (
    <div className='cd-section' style={{marginBottom: 40}} {...rest}>
      <div
        className={classes.testimonials + ' ' + classes.sectionImage}
        style={{backgroundImage: `url(${dg2})`, marginTop: '-50px'}}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
              }
            >
              <h2 className={classes.title}>My Teammates</h2>
              <h5 className={classes.description}>
                Check what my teammates have said about me.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  Boss
                  <FormatQuote/>
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    {kevinBurke.text}
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>{kevinBurke.author}</h4>
                  <h6 className={classes.cardCategory}>{kevinBurke.company}</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href={kevinBurke.linkedin} target="_blank">
                      <img src={avatarKevin} alt='...'/>
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  Colleague
                  <FormatQuote/>
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    {mattSanders.text}
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>{mattSanders.author}</h4>
                  <h6 className={classes.cardCategory}>{mattSanders.company}</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href={mattSanders.linkedin} target="_blank">
                      <img src={avatarMatt} alt='...'/>
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  Coach
                  <FormatQuote/>
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    {julioMorales.text}
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>{julioMorales.author}</h4>
                  <h6 className={classes.cardCategory}>{julioMorales.company}</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href={julioMorales.linkedin}>
                      <img src={avatarJulio} alt='...'/>
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}
