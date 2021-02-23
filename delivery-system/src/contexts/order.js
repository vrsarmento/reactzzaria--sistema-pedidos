import React, { createContext, useState } from 'react'
import t from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, setPizzas] = useState([])

  function addPizzaToOrder (pizza) {
    setPizzas((pizzas) => pizzas.concat(pizza))
  }

  return (
    <OrderContext.Provider value={{
      order: {
        pizzas
      },
      addPizzaToOrder
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
