import React from 'react'
import { Container } from './TestimonialStyles'
import {
  SectionHeader,
  SectionContainer
} from '../../global/styles/GlobalStyles'

const Testimonials = () => {
  return (
    <SectionContainer column>
      <SectionHeader>Testimonials</SectionHeader>
      <div className='imgContainer'>
        <img
          alt={'placeholder'}
          src='https://i.ibb.co/N7JcvCR/testimonial1.jpg'
        />
        <img
          alt={'placeholder'}
          src='https://i.ibb.co/N7JcvCR/testimonial1.jpg'
        />
      </div>
    </SectionContainer>
  )
}

export default Testimonials
