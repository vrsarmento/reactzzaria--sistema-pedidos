import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import firebase from 'services/firebase'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as LogoSvg } from './logo-react-zzaria.svg'

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { user, isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const handleLogin = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const handleLogout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={5}>
        <Grid item xs={12}>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant='contained' onClick={handleLogout}>
                Sair
              </Button>
            </>
          )}

          {!isUserLoggedIn && (
            <>
              <GitHubButton onClick={handleLogin}>
                Entrar com GitHub
              </GitHubButton>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(LogoSvg)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login
