import React from 'react'
import styled from 'styled-components'
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core'
import { CardLink, Content, Divider, H4, H5, PizzasGrid } from 'ui'
import { singularOrPlural } from 'utils'
import { useAuth } from 'hooks'
import { pizzasSizes } from 'fake-data'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth()

  return (
    <>
      <Content>
        <Grid container direction='column' alignItems='center'>
          <H4>
            O que vai ser hoje, {userInfo.user.firstName}?
          </H4>
          <H5>
            Escolha o tamanho da pizza:
          </H5>
        </Grid>

        <PizzasGrid>
          {pizzasSizes.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <Card>
                <CardLink to={{
                  pathname: CHOOSE_PIZZA_FLAVOURS,
                  state: pizza
                }}
                >
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
                </CardLink>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>
    </>
  )
}

const Pizza = styled.div`
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    background: ${({ theme }) => theme.palette.grey.A100};
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
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  position: relative;
  z-index: 1;
`

export default ChoosePizzaSize
