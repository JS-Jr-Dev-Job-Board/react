import styled from 'styled-components'

export const TrackerRoot = styled.div`
  border: 1px solid tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`

export const CardContainer = styled.div`
  border: 2px solid purple;
  display: flex;
  flex-wrap: wrap;
  max-width: 450px;
  justify-content: center;
`

export const CardTitle = styled.div`
  min-width: 450px;
  border: 1px solid red;
`
