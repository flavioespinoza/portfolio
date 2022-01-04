import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
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
const reload = () => window.location.reload()

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
            >
              {/* <a href={'/docs/#/event-loop'}>Event Loop Examples</a>
              <a href={'#my_data_analytics'}>My Data Analytics</a> */}
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
  )
}
