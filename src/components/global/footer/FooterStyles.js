// Footer styles
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`

export const SocialIconLink = styled.a`
  color: #aaa;
  font-size: 24px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialLink = styled(Link)`
  color: orange;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 820px) {
    margin-bottom: 30px;
  }
`

export const Img = styled.img`
  width: 120px;
  margin: auto 0;
`

export const Container = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`

export const SocialLogo = styled(Link)`
  color: #aaa;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 820px) {
    margin-bottom: 30px;
  }
`
