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
} from "./sections/index.jsx";
import  Navbar  from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import { Outlet } from "react-router";



const App = () => (
  <main className="relative">
    <section className="sticky top-3 z-20">
      <Navbar />
    </section>
    
    <Outlet/>
  </main>
);

export default App;
