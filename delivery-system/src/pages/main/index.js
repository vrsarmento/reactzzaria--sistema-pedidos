import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from 'contexts/auth'
import {
  AppBar,
  Divider as MaterialDivider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar as MaterialToolbar,
  Typography,
  withStyles
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as LogoSvg } from 'images/logo-react-zzaria.svg'

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleCloseMenu = () => {
    setAnchorElement(null)
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Typography color='inherit'>
            Olá, {userName}!
          </Typography>
          <IconButton color='inherit' onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>

          <Menu
            open={!!anchorElement}
            anchorEl={anchorElement}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Spacer />

      <Content>
        <Grid container direction='column' alignItems='center'>
          <Title variant='h4'>
            O que vai ser hoje, {userName}?
          </Title>
          <Title variant='h5'>
            Escolha o tamanho da pizza:
          </Title>
        </Grid>

        <PizzasGrid>
          {pizzaSizes.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <PaperPizza>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />

                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </PaperPizza>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>

    </>
  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const pizzaSizes = [
  {
    id: 0,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1
  },
  {
    id: 1,
    name: 'Média',
    size: 30,
    slices: 6,
    flavours: 2
  },
  {
    id: 2,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3
  }
]

const Toolbar = styled(MaterialToolbar)`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(LogoSvg)`
  width: 200px;
  height: 50px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`

const Content = styled.main`
  padding: 20px;
`

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

const style = (theme) => ({
  main: theme.mixins.toolbar
})

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

const Divider = styled(MaterialDivider)`
  width: 100%;
  margin: 20px 0;
`

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 16
})`
  padding: 20px;
`

const PaperPizza = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  padding: 20px 0;
`

const Pizza = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';
    background: #ccc;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    width: 180px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 180px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  z-index: 1;
`

export default Main
