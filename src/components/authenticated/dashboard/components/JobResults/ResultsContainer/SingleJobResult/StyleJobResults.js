import styled from 'styled-components'

export const JobResultRoot = styled.div`
  /* border: 2px solid red; */

  background: #eee;
  display: grid;
  grid-template-columns: repeat(3, 150px) 100px;
  justify-content: space-between;
  border-bottom: 1px solid #aeaeae;
  padding: 5px 10px;

  transition: 0.3s;
  button {
    transition: 0.6s;
  }
  &:hover {
    background: #dadada;
    button {
      background: tomato;
    }
  }
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
