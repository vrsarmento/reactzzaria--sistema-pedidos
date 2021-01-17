import React, { lazy, Suspense, useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import firebase from 'services/firebase'
import { LinearProgress } from '@material-ui/core'
import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App () {
  const { setUserInfo } = useContext(AuthContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

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

export default App
