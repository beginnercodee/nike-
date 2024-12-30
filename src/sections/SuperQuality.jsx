import React from 'react'
import Button from '../components/button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex-1 flex  max-container gap-10 items-center justify-between max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-palanquin  font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex  justify-center items-center">
        <img src={shoe8} alt="" className="w-[570] h-[522] object-contain" />
      </div>
    </section>
  );
}

export default SuperQuality