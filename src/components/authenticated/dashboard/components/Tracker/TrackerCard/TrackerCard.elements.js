import styled from 'styled-components'

export const TrackerCardRoot = styled.div`
  /* border: 10px solid ${(props) => `${props.bgColor}` || '#ffee'}; */
  border: 2px solid black;
  background-color: ${(props) => props.bgColor || '#ffee'};
  width: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
`
