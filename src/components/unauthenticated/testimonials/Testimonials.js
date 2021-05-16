import React from 'react'

import {
  SectionHeader,
  SectionContainer
} from '../../global/styles/GlobalStyles'
import { Carousel } from './TestimonialStyles'

import Testimonial from './testimonial/Testimonial'
import data from './testimonials.json'

const Testimonials = () => {
  return (
    <SectionContainer column wrap>
      <SectionHeader>Testimonials</SectionHeader>
      <Carousel>
        {data.map((testimonial) => {
          return <Testimonial data={testimonial} />
        })}
      </Carousel>
    </SectionContainer>
  )
}

export default Testimonials
