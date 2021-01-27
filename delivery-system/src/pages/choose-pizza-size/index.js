import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from 'contexts/auth'
import {
  Divider as MaterialDivider,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import pizzasSizes from 'fake-data/pizzas-sizes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
      <Grid container direction='column' alignItems='center'>
        <Title variant='h4'>
          O que vai ser hoje, {userInfo.user.firstName}?
        </Title>
        <Title variant='h5'>
          Escolha o tamanho da pizza:
        </Title>
      </Grid>

      <PizzasGrid>
        {pizzasSizes.map((pizza) => (
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
    </>
  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

const Divider = styled(MaterialDivider)`
  width: 100%;
  margin: 20px 0;
`

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
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

export default ChoosePizzaSize
