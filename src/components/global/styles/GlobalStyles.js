import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;  
}
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4b59f7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : ' 10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? ' 20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  align-self: center;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467FB' : '#4b59f7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
export const SectionHeader = styled.h2`
  margin: 10px 0;
  font-size: ${(props) => props.theme.size.medium};
`

//optional; can be passed the boolean prop column to set flex direction to column. Default is row.
//optional; can be passed a prop called background which takes a string hex value that will be applied to the background-color property.
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ background }) => (background ? background : null)};
  margin-bottom: 20px;
  padding: 20px;
`

export const StyledView = styled.div`
  margin: 30px auto;
  max-width: 80%;
  p {
    font-size: ${(props) => props.theme.size.smallest};
  }
`
export const Form = styled.form`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`
export const Input = styled.input`
  margin: 10px 0;
  border-radius: 8px;
  padding: 6px;
  font-size: ${(props) => props.theme.size.placeholder};
  outline: none;
`
export const Label = styled.label``

export default GlobalStyle
