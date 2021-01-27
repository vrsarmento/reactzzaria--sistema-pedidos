import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from 'contexts/auth'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar as MaterialToolbar,
  Typography
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as LogoSvg } from 'images/logo-react-zzaria.svg'

const Header = () => {
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
  )
}

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

export default Header
