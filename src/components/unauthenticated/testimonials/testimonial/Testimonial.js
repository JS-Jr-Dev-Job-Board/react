import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Img } from '../../../global/styles/GlobalStyles'
import {
  TestimonialRoot,
  TestimonialBody,
  TestimonialText,
  TestimonialName
} from '../TestimonialStyles'

const Testimonial = ({ data }) => {
  console.log(data)
  return (
    <TestimonialRoot>
      <Img src='https://via.placeholder.com/150' alt='' srcset='' />
      <TestimonialBody>
        <AiFillStar />
        <TestimonialText>{data.text}</TestimonialText>
        <TestimonialName>{data.name}</TestimonialName>
      </TestimonialBody>
    </TestimonialRoot>
  )
}

export default Testimonial
