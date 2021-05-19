import styled from 'styled-components'
import { Col as C, Row as R } from 'react-styled-flexboxgrid'

export const Container = styled.div`
  height: ${(props) => props.theme.height.container};
  background: #e1e1e1;
`
export const Col = styled(C)`
  color: #aaa;
  background: orange;
  padding: 5px;
`
export const Row = styled(R)`
  margin: 10px 0;
`
