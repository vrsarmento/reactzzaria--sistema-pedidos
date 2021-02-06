import styled from 'styled-components'
import { Divider as MaterialDivider } from '@material-ui/core'

const Divider = styled(MaterialDivider)`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(3, 0)};
`

export default Divider
