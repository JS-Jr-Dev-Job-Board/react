import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: space-evenly; */
  align-items: center;
  color: ${(props) => props.theme.color.primary};
  background: ${(pr) => pr.theme.color.background};
  border: 1px solid red;
  min-width: 100%;
`

export const Teaser = styled.p`
  width: clamp(45ch, 50%, 75ch);
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
    transition: clip-path 0.25s ease-in-out;
  }

  a {
    text-decoration: none;
  }

  :hover {
    img {
      clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
    }
  }
`
