import styled from 'styled-components'

export const MessageArea = styled.textarea`
  width: 50%;
  height: 25vh;
  font-size: ${(props) => props.theme.size.placeholder};
`
