import { Box, Carousel, Image } from 'grommet'

const Testimonials = () => {
  return (
    <Box height='small' width='medium' overflow='hidden'>
      <Carousel fill>
        <Image
          fit='cover'
          src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
        />
        <Image fit='cover' src='https://i.ibb.co/N7JcvCR/testimonial1.jpg' />
        <Image fit='cover' src='https://i.ibb.co/N7JcvCR/testimonial1.jpg' />
      </Carousel>
    </Box>
  )
}

export default Testimonials
