import styled from 'styled-components'

export const TrackerCardRoot = styled.div`
  border: 3px solid ${(props) => `${props.bgColor}` || '#fefefe'};
  /* The concatonated value 40 effects transparency */
  background-color: ${(props) => `${props.bgColor}` + 40 || '#efefef'};
  min-width: 225px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
`

export const TrackerCardTitle = styled.p`
  text-transform: capitalize;
  font-size: ${(props) => props.theme.size.smallest};
`

export const TrackerCardNumber = styled.p`
  font-weight: 700;
  font-size: ${(props) => props.theme.size.medium};
`
