import React from 'react'
import t from 'prop-types'
import { Divider, Typography } from '@material-ui/core'
import { H6 } from 'ui'

function DeliveryInfo ({ order }) {
  return (
    <>
      {!!order.address.address && (
        <>
          <H6>Endereço para entrega:</H6>
          <Typography>
            {order.address.address}, {'n° '} {order.address.number}, {' '}
            {order.address.complement} <br />
            Bairro: {order.address.district} <br />
            Cidade: {order.address.city} {' - '}
            Estado: {order.address.state} <br />
            CEP: {order.address.code} <br />
            <br />
            {!!order.address.obs && (<div>Observação: {order.address.obs}</div>)}
          </Typography>
        </>
      )}

      {!!order.phone && (
        <>
          <Divider />
          <H6>Telefone para contato:</H6>
          <Typography>
            {order.phone}
          </Typography>
        </>
      )}
    </>
  )
}

DeliveryInfo.propTypes = {
  order: t.object.isRequired
}

export default DeliveryInfo
