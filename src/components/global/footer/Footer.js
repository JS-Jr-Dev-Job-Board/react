import {
  SocialMediaWrapper,
  SocialIconLink,
  SocialIcons,
  Img,
  Container,
  SocialLink,
} from './FooterStyles'
import {
  // FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <SocialMediaWrapper>
      <Container>
        <SocialLink to='/'>
          Career Shock is a proud property
          <br /> of Code Shock, LLC &copy; 2020-2021
        </SocialLink>
      </Container>

      <Container>
        <a href='https://codeshock.dev'>
          <Img
            src='https://res.cloudinary.com/codeshock/image/upload/v1616228898/png_w0pdyz.png'
            alt='code shock logo'
          />
        </a>
      </Container>

      <Container>
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
      </Container>
    </SocialMediaWrapper>
  )
}

export default Footer
