import styled from 'styled-components'

export const TrackerCardRoot = styled.div`
  border: 1px solid black;
  background-color: ${(props) => `${props.bgColor}` || '#ffee'};
  width: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
`

export const TrackerCardTitle = styled.p`
  text-transform: capitalize;
`

export const TrackerCardNumber = styled.p`
  font-weight: 700;
  font-size: 28px;
`
