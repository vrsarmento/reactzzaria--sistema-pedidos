import React from 'react'
import styled from 'styled-components'
import { Input as MaterialInput } from '@material-ui/core'
import { ArrowBackIos, Done } from '@material-ui/icons'
import { Content, Footer, H5, HeaderContent } from 'ui'
import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaQuantity = () => {
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
          <Input defaultValue='1' autoFocus />
        </MainContent>
      </Content>

      <Footer
        buttons={[
          {
            to: CHOOSE_PIZZA_FLAVOURS,
            children: 'Mudar sabores',
            startIcon: <ArrowBackIos />
          },

          {
            to: '/',
            children: 'Finalizar compra',
            color: 'primary',
            endIcon: <Done />,
            disabled: false
          }
        ]}
      />
    </>
  )
}

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

export default ChoosePizzaQuantity
