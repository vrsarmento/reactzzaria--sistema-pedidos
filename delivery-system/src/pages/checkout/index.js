import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Grid,
  List,
  ListItem,
  Paper,
  TextField as MaterialTextField,
  Typography
} from '@material-ui/core'
import {
  Content,
  Footer,
  Title as UiTitle
} from 'ui'
import { useOrder } from 'hooks'
import { singularOrPlural } from 'utils'

function Checkout () {
  const { order } = useOrder()

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
              <List>
                {order.pizzas.map((pizza, index) => {
                  const { pizzaFlavours, pizzaSize, quantity } = pizza
                  const { name, slices, flavours } = pizzaSize

                  return (
                    <ListItem key={index}>
                      <Typography>
                        {quantity} {' '}
                        {singularOrPlural(quantity, 'pizza', 'pizzas')}
                        <b> {name.toUpperCase()} </b>
                        ({slices} fatias, até {flavours}
                        {singularOrPlural(flavours, ' sabor', ' sabores')})

                        <br />

                        {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}
                        <b> {pizzaFlavours.map(({ name }) => name).join(' / ')}</b>
                      </Typography>
                    </ListItem>
                  )
                })}
              </List>
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <Footer>
        Footer do Checkout
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

export default Checkout
