import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
  background: ${(pr) => pr.theme.color.background};
  min-width: 100%;
`

export const Teaser = styled.p`
  width: clamp(45ch, 50%, 75ch);
`
export const TeamContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const MemberCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 1.25%;

  h3 {
    margin: 1% 0 0 0;
  }
  img {
    width: 50%;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    transition: clip-path 0.25s ease-in-out;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    img {
      clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
    }
  }
`
