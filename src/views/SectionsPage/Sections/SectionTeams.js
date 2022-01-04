import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardAvatar from 'components/Card/CardAvatar.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import Button from 'components/CustomButtons/Button.js'
import Muted from 'components/Typography/Muted.js'

import teamsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js'

import marc from 'assets/img/faces/marc.jpg'
import christian from 'assets/img/faces/christian.jpg'
import kevin from 'assets/img/faces/kevin-burke.jpg'
import avatar from 'assets/img/faces/avatar.jpg'


const useStyles = makeStyles(teamsStyle)

export default function SectionTeams({ ...rest }) {
  const classes = useStyles()
  return (
    <div className='cd-section' {...rest}>
      {/* Team 1 START */}
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
              }
            >
              <h2 className={classes.title}>Our Awesome Team 1</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src={kevin} alt='...' className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Tania Andrew</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>DESIGNER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation. And I love you like Kanye loves Kanye.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href='#pablo'
                    justIcon
                    simple
                    color='twitter'
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fab fa-twitter' />
                  </Button>
                  <Button
                    href='#pablo'
                    justIcon
                    simple
                    color='dribbble'
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fab fa-dribbble' />
                  </Button>
                  <Button
                    href='#pablo'
                    justIcon
                    simple
                    color='linkedin'
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fab fa-linkedin' />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src={marc} alt='...' className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>CEO / Co-Founder</h6>
                  </Muted>
                  <p className={classes.description}>
                    And I love you like Kanye loves Kanye. We need to restart
                    the human foundation.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href='#pablo'
                    justIcon
                    simple
                    color='twitter'
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fab fa-twitter' />
                  </Button>
                  <Button
                    href='#pablo'
                    justIcon
                    simple
                    color='facebook'
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fab fa-facebook' />
                  </Button>
                  <Button
                    href='#pablo'
                    justIcon
                    simple
                    color='google'
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fab fa-google' />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    <img src={christian} alt='...' className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Christian Mike</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Web Developer</h6>
                  </Muted>
                  <p className={classes.description}>
                    I love you like Kanye loves Kanye. Don{"'"}t be scared of
                    the truth because we need to restart the human foundation.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href='#pablo'
                    justIcon
                    simple
                    color='facebook'
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fab fa-facebook' />
                  </Button>
                  <Button
                    href='#pablo'
                    justIcon
                    simple
                    color='dribbble'
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fab fa-dribbble' />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
  )
}
