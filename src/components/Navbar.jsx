import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Link } from "react-router";
function Navbar() {
  return (
    <header className="padding-x py-8 mt-5 absolute z-10  w-full ">
      <nav className="flex justify-between items-center max-container ">
        <Link to="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </Link>

        <ul className="flex-1 flex gap-16 justify-center items-center max-lg:hidden">
          <li>
            <Link
              to="/"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Home
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          {/*<a href="../sections/SignIn.jsx">Sign in</a>*/}
          <Link to="/sign-in">Sign in</Link>
          <span>/</span>
          <Link to="/sign-up">Sign Up</Link>
        </div>
        {/* hidden max-lg:block */}
        <div className="lg:hidden block">
          <img src={hamburger} alt="" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
