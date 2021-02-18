import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Button,
  Input as MaterialInput
} from '@material-ui/core'
import { ArrowBackIos, Done } from '@material-ui/icons'
import { Content, Footer, H5, HeaderContent } from 'ui'
import { CHECKOUT, HOME } from 'routes'

const ChoosePizzaQuantity = ({ location }) => {
  const [quantity, setQuantity] = useState(1)

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange (e) {
    const { value } = e.target
    if (value >= 1) {
      setQuantity(e.target.value)
    }
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H5>
            Quantas pizzas você gostaria<br />
            de pedir com esses sabores?
          </H5>
        </HeaderContent>

        <MainContent>
          <Input value={quantity} autoFocus onChange={handleChange} />
          <Button variant='contained' color='secondary'>
            Adicionar essa e <br />
            montar outra pizza
          </Button>
        </MainContent>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores',
            startIcon: <ArrowBackIos />
          },

          action: {
            to: CHECKOUT,
            children: 'Finalizar compra',
            color: 'primary',
            endIcon: <Done />
          }
        }}
      />
    </>
  )
}

ChoosePizzaQuantity.propTypes = {
  location: t.object.isRequired
}

const MainContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;

  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

export default ChoosePizzaQuantity
