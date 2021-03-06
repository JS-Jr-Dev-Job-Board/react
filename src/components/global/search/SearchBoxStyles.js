import styled from 'styled-components'

const StyledSearchBox = styled.form`
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  padding: 15px 30px;
  /* border: 1px solid black; */
  /* box-sizing: border-box; */
  input {
    ::placeholder {
      color: ${(props) => props.theme.color.accent};
    }
    background-color: ${(props) => props.theme.color.secondaryBackground};
    outline: none;
    width: min(400px, 90vw);
    padding: 8px;
  }
`
export default StyledSearchBox
