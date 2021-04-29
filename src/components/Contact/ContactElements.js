import styled from 'styled-components'

export const Form = styled.form`
  border: 3px solid black;
  height: 100px;
`
export const Input = styled.input`
  font-size: ${(props) => props.theme.size.small};
`
export const Label = styled.label`
  background-color: blue;
`