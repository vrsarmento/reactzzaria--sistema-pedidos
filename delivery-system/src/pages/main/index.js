import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core'
import Header from './header'

import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = React.lazy(
  () => import('pages/choose-pizza-size')
)
const ChoosePizzaFlavours = React.lazy(
  () => import('pages/choose-pizza-flavours')
)

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Content>
      <Suspense fallback='Loading...'>
        <Switch>
          <Route path={HOME} exact component={ChoosePizzaSize} />
          <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
        </Switch>
      </Suspense>
    </Content>
  </>
)

const Content = styled.main`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const style = (theme) => ({
  main: theme.mixins.toolbar
})

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Main
