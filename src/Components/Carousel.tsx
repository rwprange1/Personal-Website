import React, { useState } from 'react';
import { BsChevronDoubleRight,BsChevronDoubleLeft } from "react-icons/bs";

import grad from '../assets/grad.jpg';
import wf from '../assets/wf.jpg';
import maa from '../assets/maa.jpg'
import park from '../assets/park.jpg'
import lebon from '../assets/lebon.jpg'

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: string[] = [
    grad,
    wf,
    maa,
    park,
    lebon
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  

  return (
    <div className="relative w-full max-w-2xl mx-auto min-w-[300px]">
      <div className="overflow-hidden rounded-lg flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-cover object-center rounded-2xl h-100 transition duration-500 ease-in-out"
        />
      </div>

      <div className='flex-row -translate-y-40'>
         {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="absolute  left-1 -translate-y-1/2  bg-purple-400 hover:bg-purple-500 dark:bg-white/80 dark:hover:bg-white px-2 py-1 rounded-full shadow cursor-pointer"
            >
                <BsChevronDoubleLeft />
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute  right-1   -translate-y-1/2 bg-purple-400 hover:bg-purple-500 dark:bg-white/80 dark:hover:bg-white px-2 py-1 rounded-full shadow cursor-pointer"
            >
                <BsChevronDoubleRight />
            </button>

      </div>

     

      {/* Dots Indicator */}
      <div className="flex justify-center py-1 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 cursor-pointer ${
              index === currentIndex ? 'bg-purple-500 dark:bg-purple-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
