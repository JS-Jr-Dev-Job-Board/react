import styled from 'styled-components'

export const Container = styled.section`
  /* display: flex; */
  color: ${(props) => props.theme.color.primary};
`

export const Teaser = styled.p`
  /* color: ${(pr) => pr.theme.white}; */
`
export const TeamContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* align-items: center; */
  justify-content: center;
  /* border: 1px solid blue; */
`

export const MemberCard = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 0, 0, 1%, 0;

  img {
    width: 50%;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }

  a {
    text-decoration: none;
  }

  :hover {
    align-items: center;
    img {
      clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
    }
  }
`
