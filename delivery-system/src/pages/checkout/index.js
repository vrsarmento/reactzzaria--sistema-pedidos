import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  Grid,
  Paper
} from '@material-ui/core'
import {
  Content,
  OrderInfo,
  Title as UiTitle
} from 'ui'
import { Done } from '@material-ui/icons'
import FooterCheckout from './footer-checkout'
import FormAddress from './form-address'
import TextField from './text-field'
import { CHECKOUT_CONFIRMATION, HOME } from 'routes'
import { useOrder } from 'hooks'

function Checkout () {
  const { order } = useOrder()

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />
  }

  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item sx={12} md={6}>
            <Title>Qual o endereço para entrega?</Title>
            <PaperContainer>
              <FormAddress />
            </PaperContainer>

            <Title>Informe um telefone para contato:</Title>
            <PaperContainer>
              <TextField label='Telefone' xs={6} />
            </PaperContainer>
          </Grid>

          <Grid container item sx={12} md={6} direction='column'>
            <Title>Informações do seu pedido:</Title>
            <PaperContainer>
              <OrderInfo showOptions />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button
          variant='contained'
          color='primary'
          endIcon={<Done />}
          component={Link}
          to={CHECKOUT_CONFIRMATION}
          disabled={!order.pizzas.length}
        >
          Confirmar pedido
        </Button>
      </FooterCheckout>
    </>
  )
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  text-align: left;
`

const PaperContainer = styled(Paper)`
  flex-grow: 1;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
`

export default Checkout
