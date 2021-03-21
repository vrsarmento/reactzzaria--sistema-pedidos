import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider as MaterialDivider,
  Paper,
  Typography
} from '@material-ui/core'
import {
  Content,
  DeliveryInfo,
  H4,
  H6,
  OrderInfo
} from 'ui'
import { Send } from '@material-ui/icons'
import { useAuth, useOrder } from 'hooks'
import { CHECKOUT_SUCCESS } from 'routes'
import FooterCheckout from 'pages/checkout/footer-checkout'

function CheckoutConfirmation () {
  const { userInfo } = useAuth()
  const { order, sendOrder } = useOrder()

  return (
    <>
      <Content>
        <Header>
          <H4>Oi, {userInfo.user.firstName}!</H4>
          <Typography>
            Por favor, confira se está tudo certo com o seu pedido antes de finalizar.
          </Typography>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <H6>Seu pedido:</H6>
            <OrderInfo />

            <Divider />

            <DeliveryInfo order={order} />
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button
          variant='contained'
          color='primary'
          size='large'
          endIcon={<Send />}
          component={Link}
          to={CHECKOUT_SUCCESS}
          onClick={sendOrder}
        >
          Efetuar pedido
        </Button>
      </FooterCheckout>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const PaperContainer = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const Divider = styled(MaterialDivider)`
  margin: ${({ theme }) => theme.spacing(3, 0)};
`

export default CheckoutConfirmation
