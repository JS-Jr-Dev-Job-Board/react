import React from 'react'
import { Container, Text, TextContainer, ImgContainer } from './HeroStyles'
import { Button, SectionHeader, SectionContainer } from '../../global/styles/GlobalStyles'

const Hero = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <SectionHeader>Get your first junior js job</SectionHeader>
        <Text>
          We don’t serve their kind here! What? Your droids. They’ll have to
          wait outside. We don’t want them here. Listen, why don’t you wait out
          by the speeder. We don’t want any trouble. I heartily agree with you
          sir. Negola dewaghi wooldugger?!? He doesn’t like you. I’m sorry. I
          don’t like you either You just watch yourself. We’re wanted men. I
          have the death sentence in twelve systems. I’ll be careful than.
          You’ll be dead. This little one isn’t worth the effort. Come let me
          buy you something…
        </Text>
        <Button>Apply now</Button>
      </TextContainer>
      <ImgContainer>
        <img src='https://via.placeholder.com/400' alt='place holder' />
      </ImgContainer>
    </SectionContainer>
  )
}

export default Hero
