import React from 'react'
import { offer } from "../assets/images"
import Button from '../components/button';
const SpecailOffer = () => {
  return (
    <section className="flex max-container flex-1 max-xl:flex-col-reverse  justify-center items-center gap-10 py-16">
      <div>
        <img src={offer} alt="" className="flex-1 w-[773px] h-[687px]" />
      </div>
      <div>
        <div className="flex flex-1 flex-col">
          <h1 className="text-4xl font-palanquin  font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special </span> Offer
          </h1>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11 flex gap-5 flex-wrap justify-center">
            <Button label="View details" />
            <Button
              label="Learn More"
              backgroundColor="white"
              textColor="black"
            />
          </div>
          {/* <div className="mt-11"></div> */}
        </div>
      </div>
    </section>
  );
}

export default SpecailOffer