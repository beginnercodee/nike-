
import React from 'react'
import { reviews } from "../constants/index.js";
import ReviewCard from '../components/reviewCard.jsx';

const CustomerReviews = () => {
  return (
    <section>
      <div>
        <h1 className="text-4xl font-palanquin font-extrabold flex flex-1 gap-4 justify-center ">
          What Our <span className="text-coral-red">Customers </span> Says?
        </h1>
        <p className="info-text text-center m-auto max-w-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          accusamus sint beatae cum .
        </p>
      </div>
      <div className='flex max=lg:flex-col   justify-evenly items-center'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            feedback={review.feedback}
            rating={review.rating}
            imgURL={review.imgURL}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews