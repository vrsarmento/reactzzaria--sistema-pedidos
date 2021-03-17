import React, { createContext, useState } from 'react'
import t from 'prop-types'
import uuidv4 from 'uuid/v4'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, addPizza] = useState([])
  const [orderInProgress, setOrderInProgress] = useState(false)

  function newPizza (pizza) {
    return {
      id: uuidv4(),
      ...pizza
    }
  }

  function addPizzaToOrder (pizza) {
    if (orderInProgress) {
      return addPizza((pizzas) => pizzas.concat(newPizza(pizza)))
    }
    setOrderInProgress(true)
    addPizza([newPizza(pizza)])
  }

  function removePizzaFromOrder (id) {
    addPizza(pizzas => pizzas.filter(p => p.id !== id))
  }

  function sendOrder () {
    setOrderInProgress(false)
  }

  return (
    <OrderContext.Provider value={{
      order: {
        pizzas
      },
      addPizzaToOrder,
      removePizzaFromOrder,
      sendOrder
    }}
    >
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderContext, OrderProvider }
