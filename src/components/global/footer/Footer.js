import {
  SocialMediaWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialCopyright
} from './FooterStyles'
import {
  // FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
  return (
    <SocialMediaWrapper>
      <SocialLogo to='/'>CAREER SHOCK</SocialLogo>
      <SocialCopyright>CODE SHOCK, LLC 2021</SocialCopyright>
      <SocialIcons>
        <SocialIconLink
          href='https://www.instagram.com/code_shock_dev/'
          target='_blank'
          rel='noreferrer'
          aria-label='Instagram'
        >
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink
          href='https://www.youtube.com/channel/UChXeB7ef39aG9JgW_R3mv0g'
          target='_blank'
          rel='noreferrer'
          aria-label='Youtube'
        >
          <FaYoutube />
        </SocialIconLink>
        <SocialIconLink
          href='https://twitter.com/code_shock_dev'
          target='_blank'
          rel='noreferrer'
          aria-label='Twitter'
        >
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink
          href='https://www.linkedin.com/company/code-shock'
          target='_blank'
          rel='noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </SocialIconLink>
      </SocialIcons>
    </SocialMediaWrapper>
  )
}

export default Footer
