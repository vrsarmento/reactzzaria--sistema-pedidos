import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import {
  AppBar,
  Toolbar as MaterialToolbar
} from '@material-ui/core'
import { CHECKOUT } from 'routes'
import HeaderCommon from './header-common'
import HeaderCheckout from './header-checkout'

const Header = () => (
  <AppBar>
    <Toolbar>
      <Switch>
        <Route path={CHECKOUT} component={HeaderCheckout} />
        <Route component={HeaderCommon} />
      </Switch>
    </Toolbar>
  </AppBar>
)

const Toolbar = styled(MaterialToolbar)`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  margin: 0 auto;
`

export default Header
