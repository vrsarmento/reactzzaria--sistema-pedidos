import React, { useState } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import {
  Card as MaterialCard,
  Grid,
  Typography
} from '@material-ui/core'
import { CardLink, Divider, H5, HeaderContent, PizzasGrid } from 'ui'
import { singularOrPlural } from 'utils'
import { HOME } from 'routes'
import { pizzasFlavours } from 'fake-data'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours, id } = location.state

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
                  R$ {pizza.value[id]}
                </Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
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

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

export default ChoosePizzaFlavours
