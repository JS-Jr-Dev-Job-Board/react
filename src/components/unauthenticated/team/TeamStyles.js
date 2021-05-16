import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  height: ${(props) => props.theme.height.container};
`

export const Teaser = styled.h4`
  color: ${(pr) => pr.theme.white};
`
