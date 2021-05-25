import styled from 'styled-components'
import { Col as C, Row as R } from 'react-styled-flexboxgrid'

export const Container = styled.div`

  min-height: ${(props) => props.theme.height.container};

`
export const Col = styled(C)`
  color: #aaa;
  padding: 5px;
`
export const Row = styled(R)`
  margin: 10px 0;
`
