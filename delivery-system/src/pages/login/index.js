import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from 'contexts/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as LogoSvg } from 'images/logo-react-zzaria.svg'

function Login () {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify='center' spacing={5}>
        <Grid item xs={12}>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login}>
            Entrar com GitHub
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const Logo = styled(LogoSvg)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    max-width: 480px;
    padding: ${({ theme }) => theme.spacing(2)}px;
    text-transform: none;
  }
`

export default Login
