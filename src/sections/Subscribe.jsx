import React from 'react'
import Button from '../components/button'

import { Link } from 'react-router-dom'
const Subscribe = () => {
  return (
    <section id="contact-us" className='max-container flex justify-between items-center max-lg:flex-col gap-10  '>
      <h3 className='font-palanquin  text-4xl leading-[68px] lg:max-w-lg font-bold  '>
        Sign Up from  <span className='text-coral-red'>Updates
        </span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex item-center max-sm:flex-col gap-5 p-2.5 sm:border-2 sm:border-slate rounded-full">
        <input type="text"
        placeholder='Enter your email'
        className='input'
        />
        <Link to="/sign-up" >
        
        <Button label="sign up" fullWidth/>
        </Link>
      </div>
    </section>
  )
}

export default Subscribe