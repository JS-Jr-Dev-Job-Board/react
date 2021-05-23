import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
`

export const Card = styled.div`
  border: 1px solid gray;
  padding: 10px;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  * {
    /* margin: 8px; */
  }
`

export const PositionText = styled.h6`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`
export const DescriptionText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`
