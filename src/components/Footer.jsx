import React from 'react';
import logo from '../assets/logo.png';
import Helmet from '../assets/Helmet.jpeg';

function Footer() {
  return (
    <div className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row bg-blue-950 md:p-0 p-6 h-[340px] mt-10">

      <div className="flex flex-col md:w-1/4 justify-center items-center m-8">
        <div className="w-24 h-24 md:w-32 md:h-32 mb-4 lg:h-10">
          <img className="w-full h-full object-cover" alt="Logo" src={logo} />
        </div>
        <p className="text-white text-sm md:text-base text-center">
          We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
        </p>
      </div>


      <div className="flex flex-col md:w-1/4 items-start mt-6 md:mt-20 md:ml-20">
        <div className="text-white font-bold text-lg mb-4">Navigation</div>
        <div className="flex flex-col gap-2">
          <div className="text-white text-sm">Home</div>
          <div className="text-white text-sm">About Us</div>
          <div className="text-white text-sm">Services</div>
          <div className="text-white text-sm">Contact Us</div>
        </div>
      </div>


      <div className="flex flex-col md:w-1/4 items-start mt-6 md:mt-20 ">
        <div className="text-white font-bold text-lg mb-4">Recent Project</div>
        <div className="w-36 h-20 md:w-52 md:h-32 bg-grey-1 rounded-md overflow-hidden mb-4">
          <img className="w-full h-full object-cover" alt="Man with helmet" src={Helmet} />
        </div>
      </div>


      <div className="flex flex-col md:w-1/4 items-start mt-6 md:mt-20 md:ml-6">
        <div className="text-white font-bold text-lg mb-4">Subscribe Us</div>
        <div className="flex flex-col gap-4">
          <input
            className="w-full px-4 py-2 bg-white rounded-md border-none text-grey-2 text-sm md:text-base"
            placeholder="Enter Your Email"
            type="email"
          />
          <button
            className="w-full bg-[#1195d6] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
