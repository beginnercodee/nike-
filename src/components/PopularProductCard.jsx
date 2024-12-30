import React from 'react'
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL,
  name,
  price
}) => {
  return (
    <div className=" flex-1 flex flex-col w-full">
      <img
        src={imgURL}
        alt="img"
        className="border-2 border-coral-red rounded-3xl"
      />
      <div className="mt-8 flex  justify-start gap-2.5 ">
        <img src={star} alt="star" className="w-[24px] h-[24px] " />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard