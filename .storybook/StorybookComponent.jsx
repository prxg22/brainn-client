// libs
import React, { Component } from 'react'

// Printi libs
import Grid from '../src/app/ui-components/Grid'

import style from '../src/styles/storybook/base.styl'

const StoryComponent = (storyFn) => (
  <Grid.Container style={{ paddingTop: '30px' }} className={style.container}>
    <Grid.Row>
      <Grid.Column noGutter>
        {storyFn()}
      </Grid.Column>
    </Grid.Row>
  </Grid.Container>
)

export default StoryComponent
