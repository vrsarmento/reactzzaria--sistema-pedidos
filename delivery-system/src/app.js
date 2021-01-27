import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import t from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import firebase from 'services/firebase'
import { LinearProgress } from '@material-ui/core'
import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App ({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [didCheckUserLogged, setDidCheckUserLogged] = useState(false)
  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0]
        }
      })
      setDidCheckUserLogged(true)
    })
  }, [setUserInfo])

  if (!didCheckUserLogged) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to='/' />
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' exact component={MainPage} />
        </Switch>
      </Suspense>
    </>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
