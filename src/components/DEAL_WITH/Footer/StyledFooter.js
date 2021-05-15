import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.color.navBackground};
  display: flex;
  justify-content: center;
  padding: 25px 0;
  margin: 10px 0 0 0;
  p {
    margin: 0 10px;
    color: ${(props) => props.theme.color.white};
  }
`
export default StyledFooter
