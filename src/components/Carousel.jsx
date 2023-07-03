import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const sliderData = [
  { img: './assets/norte-1.webp' },
  { img: './assets/norte-2.jpg' },
  { img: './assets/norte-3.jpg' },
];

function Carousel() {
  const [slide, setslide] = useState(0);
  const length = sliderData.length;
  const prevSlide = () => {
    setslide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setslide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="flex relative max-w-[1440px] mx-auto px-4 py-16 justify-center items-center text-white">
      <BsArrowLeftCircle
        size={50}
        onClick={prevSlide}
        className="absolute top-[50%] left-8 cursor-pointer"
      />
      <BsArrowRightCircle
        size={50}
        onClick={nextSlide}
        className="absolute top-[50%] right-8 cursor-pointer"
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'w-full object-cover' : null}>
          {index === slide && <img className="w-full h-full " src={item.img} />}
        </div>
      ))}
    </div>
  );
}

export default Carousel;
