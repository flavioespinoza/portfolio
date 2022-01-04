import React, { useState } from 'react'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'
import Danger from 'components/Typography/Danger.js'
import Quote from "components/Typography/Quote.js";

// @material-ui icons
import Apps from '@material-ui/icons/Apps'
import ViewDay from '@material-ui/icons/ViewDay'
import ViewCarousel from '@material-ui/icons/ViewCarousel'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import descriptionStyle from 'assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js'
import quotes from 'assets/js/quotes'

const useStyles = makeStyles(descriptionStyle)
export default function SectionDescription() {
  const [quote] = useState(
    quotes({
      firstName: 'Kevin',
      middleName: null,
      lastName: 'Burke',
    })
  )

  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify='center'>
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              {quote.success ? (
                <div className={'text-left'}>
                  <Quote {...quote}  />
                </div>
              ) : (
                <Danger>
                  <h2 className={'text-left'}>{quote.quote}</h2>
                </Danger>
              )}
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title='Huge Number of Components'
                description='Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.'
                icon={Apps}
                iconColor='danger'
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title='Multi-Purpose Sections'
                description='Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages.'
                icon={ViewDay}
                iconColor='primary'
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title='Example Pages'
                description='If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.'
                icon={ViewCarousel}
                iconColor='success'
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}
