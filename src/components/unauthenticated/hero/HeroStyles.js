import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: flex-start;
  justify-content: space-around;

  button {
    border-radius: 8px;
    border: 0;
    outline: 0;
    padding: 10px 15px;
    background-color: lightskyblue;
    color: white;
    font-weight: bold;
  }
`

export const Text = styled.p`
  padding-right: 15px;
  font-size: 20px;
`
