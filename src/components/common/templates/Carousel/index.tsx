import React, { useState } from 'react';
import styled from 'styled-components';

import { flexbox } from '@/styles/mixin';

interface CarouselProps {
  items: React.ReactNode[];
}

const CarouselContainer = styled.div`
  ${flexbox({ ai: 'center' })}
  width: 390px;
  overflow: hidden;
  position: relative;
`;

const SlideButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  z-index: 10;
`;

const CarouselContent = styled.div<{
  currentIndex: number;
}>`
  ${flexbox({})}
  gap: 16px;

  transform: ${({ currentIndex }) =>
    `translateX(-${currentIndex * 25}%)`};
  transition: all 0.3s ease;
`;

const CarouselSlide = styled.div``;

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % items.length,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + items.length) % items.length,
    );
  };

  return (
    <CarouselContainer>
      <SlideButton
        onClick={prevSlide}
        style={{ left: '10px' }}
      >
        Previous
      </SlideButton>
      <CarouselContent currentIndex={currentIndex}>
        {items.map((item, index) => (
          <CarouselSlide key={`carousel-${index + 1}`}>
            {item}
          </CarouselSlide>
        ))}
      </CarouselContent>
      <SlideButton
        onClick={nextSlide}
        style={{ right: '10px' }}
      >
        Next
      </SlideButton>
    </CarouselContainer>
  );
};

export default Carousel;
