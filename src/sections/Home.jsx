import React from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./index";
import { useRef } from "react";
const Home = () => {
  const heroRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section  ref={heroRef} className="xl:padding-l  wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding  ">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8 text-yellow-200">
        <Footer />
      </section>
      <button
  onClick={scrollToHero}
  className="fixed bottom-6 right-6 bg-coral-red hover:bg-opacity-90 text-white rounded-full shadow-md p-4 focus:outline-none focus:ring-2 focus:ring-coral-red focus:ring-offset-2"
  title="Back to Hero"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 15l7-7 7 7"
    />
  </svg>
</button>

    </>
  );
};

export default Home;
