import React, { createContext } from 'react'
import t from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  function addPizzaToOrder (pizza) {

  }

  return (
    <OrderContext.Provider value={{
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
