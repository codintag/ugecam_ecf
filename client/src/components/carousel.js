
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ucam1 from './images/ucam1.jpg';
import ucam2 from './images/ucam2.jpg';
import ucam3 from './images/ucam3.jpg';
import ucam4 from './images/ucam4.jpg';
import ucam5 from './images/ucam5.jpg';


function MyCarousel() {
  return (
    <div>
      {/* ici je rajoute ma navbar dans le component MyCarousel */}
  <Carousel indicators={false} controls={false}>     
  <Carousel.Item>
    <img style = {styles}
      className="d-block w-100"
      src={ucam1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img style = {styles}
      className="d-block w-100"
      src={ucam2}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img style = {styles}
      className="d-block w-100"
      src={ucam3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img style = {styles}
      className="d-block w-100"
      src={ucam4}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img style = {styles}
      className="d-block w-100"
      src={ucam5}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img style = {styles}
      className="d-block w-100"
      src={ucam3}
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel>
    </div>
  )
}
const  styles = {
  height: '600px'
}

export default MyCarousel;