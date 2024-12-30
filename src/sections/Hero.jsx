import React, { useState } from 'react'
import Button from '../components/button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShowCard from "../components/showCard"
import { Link } from 'react-router';

const Hero = () => {
   const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container   "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center  item-start  max-xl:padding-x pt-28  ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Link  to="/shop-now">
        <Button label="Shop Now" iconURL={arrowRight} />
        </Link>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-8 font-palanquin font-semibold text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center  relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImg}
          alt=""
          className="w-[610] h-[500]  relative object-contain z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index} className="  ">
              <ShowCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero