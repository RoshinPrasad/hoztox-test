import React from "react";
import icon from "../assets/package.svg";
import logo from "../assets/logoip.svg";

function Services() {
  return (
    <div className="relative bg-gray-100 py-16 px-4 md:px-8 lg:px-16 xl:px-32 lg:mt-32 ">
      <div className="text-center mb-16">
        <div className="font-semibold text-2xl text-blue-600 mb-4">
          OUR SERVICES
        </div>
        <p className="text-xl text-blue-700">
          EFFICIENT AND RELIABLE SHIPPING WITH FASTGO
        </p>
      </div>
      <div className="max-w-screen-xl lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="OCEAN SHIPPING"
            description="We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs."
            iconSrc={icon}
            bgColor="bg-blue-900"
            textColor="text-white"
          />
          <ServiceCard
            title="AIR SHIPPING"
            description="We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs."
            iconSrc={icon}
            bgColor="bg-white"
            textColor="text-blue-950"
          />
          <ServiceCard
            title="TRUCK SHIPPING"
            description="We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs."
            iconSrc={icon}
            bgColor="bg-white"
            textColor="text-blue-950"
          />
          <ServiceCard
            title="CUSTOM CLEARANCE"
            description="We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs."
            iconSrc={icon}
            bgColor="bg-white"
            textColor="text-blue-950"
          />
          <ServiceCard
            title="FREIGHT FORWARDING"
            description="We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs."
            iconSrc={icon}
            bgColor="bg-white"
            textColor="text-blue-950"
          />
          <ServiceCard
            title="INSURANCE"
            description="We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs."
            iconSrc={icon}
            bgColor="bg-white"
            textColor="text-blue-950"
          />
        </div>
      </div>
      <div className="relative right-36 w-[1365px] h-[206px] bg-[#1195d6] mt-16 overflow-hidden">
        <div className="flex items-start gap-12 relative top-16 left-8 lg:left-16">
          <img className="w-[205.6px] h-[44px]" alt="Logo" src={logo} />
          <img className="w-[205.6px] h-[44px]" alt="Logo" src={logo} />
          <img className="w-[205.6px] h-[44px]" alt="Logo" src={logo} />
          <img className="w-[205.6px] h-[44px]" alt="Logo" src={logo} />
          <img className="w-[205.6px] h-[44px]" alt="Logo" src={logo} />
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({ title, description, iconSrc, bgColor, textColor }) => {
  return (
    <div
      className={`relative ${bgColor} rounded-[12px] w-60 h-60 overflow-hidden border border-gray-200`}
    >
      <img
        className="w-[76px] h-[76px] bg-blue-400 m-3 rounded"
        alt="Icon"
        src={iconSrc}
      />
      <div className="flex flex-col text-blue-600 items-start gap-1 p-2">
        <div className={`font-bold ${textColor}`}>{title}</div>
        <p className={`font-thin  ${textColor}`}>{description}</p>
      </div>
    </div>
  );
};

export default Services;
