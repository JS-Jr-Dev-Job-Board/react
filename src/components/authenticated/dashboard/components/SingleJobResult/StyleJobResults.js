import styled from 'styled-components'

export const JobResultRoot = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 450px;
  border-bottom: 1px solid #aeaeae;
  padding: 0 10px;
`

export const JobTitle = styled.p`
  /* border: 1px solid maroon; */
`
export const JobType = styled.p`
  /* border: 1px solid magenta; */
`
export const DateListed = styled.p`
  /* border: 5px solid moccasin; */
`

export const ApplyBtn = styled.button`
  border: none;
  outline: none;
  background-color: #d3f3da;
  padding: 0 30px;
  border-radius: 8px;
  font-size: ${(props) => props.theme.size.smallest};
`
