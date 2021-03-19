import React, { useEffect, useState } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import {
  Card as MaterialCard,
  Grid,
  Typography
} from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import { CardLink, Content, Divider, Footer, H5, HeaderContent, PizzasGrid } from 'ui'
import { checkboxesChecked, singularOrPlural, toMoney } from 'utils'
import { CHOOSE_PIZZA_QUANTITY, HOME } from 'routes'
import { db } from 'services/firebase'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))
  const [pizzasFlavours, setPizzasFlavours] = useState([])

  useEffect(() => {
    let mounted = true

    db.collection('pizzasFlavours').get().then(querySnapshot => {
      const flavours = []

      querySnapshot.forEach(doc => {
        flavours.push({
          id: doc.id,
          ...doc.data()
        })
      })

      if (mounted) setPizzasFlavours(flavours)
    })

    return () => {
      mounted = false
    }
  }, [])

  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id } = location.state.pizzaSize

  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return
    }

    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H5>
            Escolha até {flavours}{' '}
            {singularOrPlural(flavours, 'sabor', 'sabores')}:
          </H5>
        </HeaderContent>

        <PizzasGrid>
          {pizzasFlavours.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <Card checked={!!checkboxes[pizza.id]}>
                <Label>
                  <Checkbox
                    checked={!!checkboxes[pizza.id]}
                    onChange={handleChangeCheckbox(pizza.id)}
                  />
                  <Img src={pizza.image} alt={pizza.name} />

                  <Divider />

                  <Typography>{pizza.name}</Typography>
                  <Typography variant='h5'>
                    {toMoney(pizza.value[id])}
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar tamanho',
            startIcon: <ArrowBackIos />
          },

          action: {
            to: {
              pathname: CHOOSE_PIZZA_QUANTITY,
              state: {
                ...location.state,
                pizzaFlavours: getFlavoursNameAndId({
                  checkboxes,
                  pizzasFlavours
                })
              }
            },
            children: 'Quantas pizzas?',
            color: 'primary',
            endIcon: <ArrowForwardIos />,
            disabled: checkboxesChecked(checkboxes).length === 0
          }
        }}
      />
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

const Img = styled.img`
  width: 200px;
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ checked, theme }) => checked
    ? theme.palette.secondary.dark
    : ''
  };
`

function getFlavoursNameAndId ({ checkboxes, pizzasFlavours }) {
  return Object.entries(checkboxes)
    .filter(([, value]) => !!value)
    .map(([id]) => ({
      id,
      name: pizzasFlavours.find((flavour) => flavour.id === id).name
    }))
}

export default ChoosePizzaFlavours
