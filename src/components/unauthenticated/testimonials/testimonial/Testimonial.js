import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Img } from '../../../global/styles/GlobalStyles'
import {
  TestimonialRoot,
  TestimonialBody,
  TestimonialText,
  TestimonialName,
  Stars
} from '../TestimonialStyles'

const Testimonial = ({ data }) => {
  return (
    <TestimonialRoot>
      <Img src='https://via.placeholder.com/150' alt='' srcset='' />
      <TestimonialBody>
        <Stars>
          {data.stars.map((star) => (
            <AiFillStar />
          ))}
        </Stars>
        <TestimonialText>{data.text}</TestimonialText>
        <TestimonialName>{data.name}</TestimonialName>
      </TestimonialBody>
    </TestimonialRoot>
  )
}

export default Testimonial
