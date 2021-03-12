import React from 'react'
import { Link } from 'react-router-dom'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Button,
  Grid,
  Paper,
  TextField as MaterialTextField
} from '@material-ui/core'
import {
  Content,
  Footer,
  OrderInfo,
  Title as UiTitle
} from 'ui'
import { Done } from '@material-ui/icons'
import { CHECKOUT_CONFIRMATION } from 'routes'

function Checkout () {
  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item sx={12} md={6}>
            <Title>Qual o endereço para entrega?</Title>
            <PaperContainer>
              <Grid container spacing={2}>
                <TextField label='CEP' xs={6} autoFocus />
                <TextField label='Rua' xs={12} />
                <TextField label='Número' xs={3} />
                <TextField label='Complemento' xs={3} />
                <TextField label='Bairro' xs={6} />
                <TextField label='Cidade' xs={9} />
                <TextField label='Estado' xs={3} />
                <TextField label='Observação' xs={12} />
              </Grid>
            </PaperContainer>

            <Title>Informe um telefone para contato:</Title>
            <PaperContainer>
              <TextField label='Telefone' xs={6} />
            </PaperContainer>
          </Grid>

          <Grid container item sx={12} md={6} direction='column'>
            <Title>Informações do seu pedido:</Title>
            <PaperContainer>
              <OrderInfo />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <Footer>
        <FooterContent>
          <Button
            variant='contained'
            color='primary'
            endIcon={<Done />}
            component={Link}
            to={CHECKOUT_CONFIRMATION}
          >
            Confirmar dados
          </Button>
        </FooterContent>
      </Footer>
    </>
  )
}

function TextField ({ autoFocus, xs, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        inputProps={{ autoFocus }}
        variant='outlined'
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  autoFocus: t.bool,
  xs: t.number
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

const FooterContent = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default Checkout
