import React from "react";
import { star } from "../assets/icons";

const reviewCard = ({ customerName, feedback, rating, imgURL }) => {
    return (
      <div className="flex flex-col  justify-center items-center my-6 ">
        <img
          src={imgURL}
          alt="img"
          className="w-[120px] h-[120px] rounded-full object-cover items-center flex"
        />
        <p className="info-text max-w-sm text-center">{feedback}</p>
        <div className="flex gap-2">
          <img src={star} alt="" className="w-[24] h-[24] object-contain m-0" />
          <p className="text-montserrat text-slate-gray">({rating})</p>
        </div>
        <h1 className="font-palanquin font-extrabold mt-2  font-4xl text-center  ">{customerName}</h1>
      </div>
    );
};

export default reviewCard;
