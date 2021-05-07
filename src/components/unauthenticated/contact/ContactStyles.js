import styled from 'styled-components'

export const MessageArea = styled.textarea`
  width: 50%;
  height: 25vh;
  font-size: ${(props) => props.theme.size.placeholder};
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #d3d3d3;
  margin-bottom: 20px;
`
export const FormDiv = styled.div`
  width: 50%;
`
export const TextDiv = styled.div`
  width: 50%;
`
export const Text = styled.div`
  padding-right: 15px;
`
