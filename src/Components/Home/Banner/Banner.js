import React, { useState } from 'react';
import {Carousel} from 'react-bootstrap'

import banner1 from  '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'

const Banner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Halal Food</h3>
            <p>EXperince The Best Food Service from Our Store</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Halal Food</h3>
            <p>EXperince The Best Food Service from Our Store</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Halal Food</h3>
            <p>EXperince The Best Food Service from Our Store</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};
export default Banner;