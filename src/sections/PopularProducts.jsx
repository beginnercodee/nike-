import React from 'react'
import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-palanquin ">
          Our <span className="text-coral-red ">Popular</span> Products
        </h1>
        <p className="font-palanquin text-xl">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14   ">
        {products.map((item, index) => (
          <div key={index}>
            <PopularProductCard imgURL={item.imgURL}
              name={item.name}
            price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularProducts