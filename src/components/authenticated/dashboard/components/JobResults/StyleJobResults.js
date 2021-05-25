import styled from 'styled-components'

export const JobHeaderRoot = styled.div`
  /* border: 1px solid tomato; */
  background-color: #ddd;
  display: grid;
  grid-template-columns: repeat(3, 150px) 100px;
  justify-content: space-between;
  padding: 5px 10px;
`

export const JobResultsRoot = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  background-color: #999;
  padding: 5px;
`
