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
  H4,
  H5,
  H6,
  OrderInfo
} from 'ui'
import { ArrowBackIos } from '@material-ui/icons'
import { useAuth } from 'hooks'
import { HOME } from 'routes'
import FooterCheckout from 'pages/checkout/footer-checkout'

function CheckoutSuccess () {
  const { userInfo } = useAuth()

  return (
    <>
      <Content>
        <Header>
          <H4>Prontinho, {userInfo.user.firstName}!</H4>
          <Typography>
            Seu pedido será entregue no endereço abaixo em até:
          </Typography>
          <H5>60 minutos</H5>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <H6>Seu pedido:</H6>
            <OrderInfo />

            <Divider />

            <H6>Endereço para entrega:</H6>
            <Typography>
              Rua tal, num 0 - Bairro lá - CEP: 00.000-000
            </Typography>

            <Divider />

            <H6>Telefone para contato:</H6>
            <Typography>
              (00) 00000-0000
            </Typography>
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout>
        <Button
          color='secondary'
          startIcon={<ArrowBackIos />}
          component={Link}
          to={HOME}
        >
          Voltar para a Página Inicial
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

export default CheckoutSuccess
