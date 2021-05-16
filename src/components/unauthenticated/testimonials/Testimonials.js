import React from 'react'

import {
  SectionHeader,
  SectionContainer
} from '../../global/styles/GlobalStyles'
import { Carousel } from './TestimonialStyles'

import Testimonial from './testimonial/Testimonial'

const Testimonials = () => {
  return (
    <SectionContainer column>
      <SectionHeader>Testimonials</SectionHeader>
      {/* Carousel */}
      <Carousel>
        <Testimonial />
        <Testimonial />
      </Carousel>
    </SectionContainer>
  )
}

export default Testimonials
