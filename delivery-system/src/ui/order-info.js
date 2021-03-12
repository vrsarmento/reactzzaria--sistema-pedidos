import React from 'react'
import {
  List,
  ListItem,
  Typography
} from '@material-ui/core'
import { singularOrPlural } from 'utils'
import { useOrder } from 'hooks'

function OrderInfo () {
  const { order } = useOrder()

  return (
    <List>
      {order.pizzas.map((pizza, index) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza
        const { name, slices, flavours } = pizzaSize

        return (
          <ListItem key={index}>
            <Typography>
              <b>{quantity} </b>
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
  )
}

export default OrderInfo
