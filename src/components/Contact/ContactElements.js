import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 5px;
  }
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.size.placeholder};
`

export const Input = styled.input`
  border-radius: 4px;
  padding: 2px;
  margin: 4px;
  font-size: ${(props) => props.theme.size.placeholder};
`

export const MessageArea = styled.textarea`
  width: 50%;
  height: 25vh;
  font-size: ${(props) => props.theme.size.placeholder};
`
