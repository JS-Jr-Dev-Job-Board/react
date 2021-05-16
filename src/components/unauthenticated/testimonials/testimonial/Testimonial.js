import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Img } from '../../../global/styles/GlobalStyles'
import { TestimonialRoot, TestimonialBody } from '../TestimonialStyles'

const Testimonial = (props) => {
  return (
    <TestimonialRoot>
      <Img src='https://via.placeholder.com/150' alt='' srcset='' />
      <TestimonialBody>
        <AiFillStar />
<p>hi</p>
        {/* stars */}
        {/* text */}
        {/* name */}
      </TestimonialBody>
    </TestimonialRoot>
  )
}

export default Testimonial
