import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px;
`

export const Card = styled.div`
  border: 1px solid gray;
  padding: 10px;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  * {
    margin: 8px;
  }
`

export const Img = styled.img`
  border-radius: 50%;
`

export const PositionText = styled.h6`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`
export const DescriptionText = styled.p``
