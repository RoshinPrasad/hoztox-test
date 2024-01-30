import React, { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* subheader */}
      <div className="hidden md:flex items-center gap-4 mx-4 md:mx-16 h-12 absolute top-0 left-0 right-0 p-4 md:static">
        <div className="font-medium">massshipping@mail.com</div>
        <div className="font-BUTTON">+1 (333) 000-0000</div>
        <button className="bg-blue-500 text-white px-5 py-1 rounded-lg hover:bg-blue-800 ml-auto">
          GET QUOTE
        </button>
      </div>

      <header className="top-12 left-0 w-full bg-blue-900 text-white">
        <div className="container mx-auto py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 mx-4 md:mx-10">
            <img src={logo} alt="Logo" className="w-3/6 h-auto" />
          </div>

          <div className="md:hidden">
            <select
              className="text-white bg-blue-900 appearance-none border-none focus:outline-none mr-12"
              onChange={toggleNav}
            >
              <option value="none" label="&#9776; "></option>
              <option value="home">HOME</option>
              <option value="about">ABOUT US</option>
              <option value="services">SERVICES</option>
              <option value="gallery">GALLERY</option>
              <option value="contact">CONTACT</option>
            </select>
          </div>

          <nav
            className={`md:flex space-x-8 mx-4 ${
              isNavOpen ? "hidden" : "hidden"
            }`}
          >
            <a href="#" className="hover:text-blue-1">
              HOME
            </a>
            <a href="#" className="hover:text-blue-1">
              ABOUT US
            </a>
            <a href="#" className="hover:text-blue-1">
              SERVICES
            </a>
            <a href="#" className="hover:text-blue-1">
              GALLERY
            </a>
            <a href="#" className="hover:text-blue-1">
              CONTACT
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
