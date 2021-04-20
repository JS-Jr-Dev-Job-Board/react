import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  justify-content: center;
  padding: 25px 0;
  p {
    margin: 0 10px;
  }
`
export default StyledFooter
