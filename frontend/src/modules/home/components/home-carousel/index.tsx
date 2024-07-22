'use client';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import coffeeProdImg from '/public/coffee_production.webp'
import coffeeRoastImg from '/public/coffee_roasting.webp'

const HomeCarousel: React.FC = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image src={coffeeProdImg} alt="Coffee production" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={coffeeProdImg} alt="Coffee production" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
