import React from 'react'
import t from 'prop-types'
import { Redirect } from 'react-router-dom'
import { H5, HeaderContent } from 'ui'
import { singularOrPlural } from 'utils'
import { HOME } from 'routes'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }
  const { flavours } = location.state

  return (
    <>
      <HeaderContent>
        <H5>
          Escolha até {flavours}{' '}
          {singularOrPlural(flavours, 'sabor', 'sabores')}:
        </H5>
      </HeaderContent>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
