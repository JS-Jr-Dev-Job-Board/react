import React from 'react'
import styled from 'styled-components'
//import components
import LoginBtn from './auth/LoginBtn'
import LogoutBtn from './auth/LogoutBtn'
import SignIn from './auth/SignIn'
import SearchBox from './SearchBox/SearchBox'
import Testimonials from './Testimonials'
//import Footer from './Footer/Footer'
import HomePage from './HomePage/Homepage'
import GetStarted from './GetStarted/Getstarted'
import InfoSection from './InfoSection/InfoSection'
import { homeObjOne} from '../HomePage/Data'


/*const ComingSoon = styled.h1`
  color: ${(pr) => pr.theme.primaryColor};
`
const Teaser = styled.p`
  color: ${(pr) => pr.theme.white};
`*/

const Home = () => {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <SearchBox />
            
          <HomePage />
          <homeObjOne />
          <InfoSection />      
          <GetStarted />
        </header>
      </div>
      <div className = "App">
        <footer className = 'App-footer'>
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends.
                </FooterSubHeading>
                 <FooterSubText>
                     You can unsubscribe at any time.
                 </FooterSubText>
                   <Form>
                       <FormInput name="email" type="email" placeholder="Your Email" />
                           <Button fontBig>Subscribe</Button> 
                   </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Us
                        </FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Career</FooterLink>
                        <FooterLink to="/">Investors</FooterLink> 
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Contact Us
                        </FooterLinkTitle>
                        <FooterLink to="/sign-up">Contact Us</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    

                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink> 
                        <FooterLink to="/">LinkedIn</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        CAREER SHOCK 
                    </SocialLogo>
                    <WebsiteRights>
                        CODE SHOCK, LLC 2021
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>

        </footer>
      
      </div>
      <Testimonials />
    </>
  )
}

export default Home
