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

export const SocialCopyright = styled.p`
  color: #aaa;
  font-size: 24px;
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
// export const asdf = styled.div``
