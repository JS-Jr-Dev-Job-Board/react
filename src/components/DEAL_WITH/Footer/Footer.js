import React from 'react'
// REACT ICONS
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa'
//import Copyright from 'react-copyright'

// COMPONENT'S ELEMENTS
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements'

// GLOBAL STYLES
import { Button } from '../GlobalStyle'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends.
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Career</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>Contact Us</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink herf='https://www.instagram.com/code_shock_dev/'>
              Instagram
            </FooterLink>
            <FooterLink herf='https://www.youtube.com/channel/UChXeB7ef39aG9JgW_R3mv0g'>
              Youtube
            </FooterLink>
            <FooterLink herf='https://twitter.com/code_shock_dev'>
              Twitter
            </FooterLink>
            <FooterLink herf='https://www.linkedin.com/company/code-shock'>
              LinkedIn
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            CAREER SHOCK
          </SocialLogo>
          <WebsiteRights>CODE SHOCK, LLC 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href='https://www.instagram.com/code_shock_dev/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.youtube.com/channel/UChXeB7ef39aG9JgW_R3mv0g'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href='https://twitter.com/code_shock_dev'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.linkedin.com/company/code-shock'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
