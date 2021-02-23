import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress, withStyles } from '@material-ui/core'
import Header from './header'

import * as routes from 'routes'

const ChoosePizzaSize = React.lazy(
  () => import('pages/choose-pizza-size')
)
const ChoosePizzaFlavours = React.lazy(
  () => import('pages/choose-pizza-flavours')
)
const ChoosePizzaQuantity = React.lazy(
  () => import('pages/choose-pizza-quantity')
)
const Checkout = React.lazy(
  () => import('pages/checkout')
)

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route
          path={routes.HOME}
          component={ChoosePizzaSize}
          exact
        />
        <Route
          path={routes.CHOOSE_PIZZA_FLAVOURS}
          component={ChoosePizzaFlavours}
        />
        <Route
          path={routes.CHOOSE_PIZZA_QUANTITY}
          component={ChoosePizzaQuantity}
        />
        <Route
          path={routes.CHECKOUT}
          component={Checkout}
        />
      </Switch>
    </Suspense>
  </>
)

const style = (theme) => ({
  main: theme.mixins.toolbar
})

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Main
