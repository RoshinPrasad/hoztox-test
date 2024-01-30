import React from "react";
import warehouse from "../assets/b4d2376956d1d055f7955e27828643e8.jpeg";
import anchor from "../assets/anchor-shape_icon-icons.com_73685.png";
import Divider from "@mui/material/Divider";

function About() {
  return (
    <div>
      <div className="relative flex flex-col md:flex-row w-full max-w-screen-xxl mx-auto p-8 md:p-16 lg:p-24 bg-slate-50">
        <div className="flex-col items-start inline-flex gap-8 relative md:w-[480px] sm:w-20 lg:left-20">
          <div className="relative w-fit mt-[-1.00px] lg:font-bold text-blue-900 text-lg md:text-xl tracking-wide leading-tight">
            ABOUT US
          </div>
          <p className="relative font-heading-2 text-blue-900 text-base md:text-lg lg:text-3xl lg:font-serif">
            EMPOWERING YOUR BUSINESS WITH TAILORED LOGISTICS SOLUTIONS
          </p>
          <p className="relative text-blue-900 font-sans text-grey-2 text-sm md:text-base lg:text-lg">
            We believe in providing our clients with personalized and efficient
            logistics solutions that meet their unique needs. With years of
            experience and a team of experts, we are dedicated to empowering
            your business with seamless shipping experiences.
          </p>
          <button className="flex items-center justify-center bg-[#1195d6] text-white text-sm md:text-base lg:text-lg p-2 md:p-3 rounded-md">
            LEARN MORE
          </button>
        </div>

        <div className="absolute w-full md:w-[506px] h-[350px] top-8 md:top-40 right-10  overflow-hidden">
          <div className="relative w-full lg:w-96 md:w-[656px] h-[438px] top-[-14px] right-[-146px] ">
            <img
              className="absolute w-full md:w-[536px] h-[410px] top-[14px] right-[116px] object-cover rounded-lg"
              alt="Two warehouse"
              src={warehouse}
            />
            <div className="absolute w-[172px] h-[217px] top-[147px] right-[316px]">
              <div className="relative h-[217px]">
                <div className="absolute w-[172px] h-[157px] top-[30px] right-0 bg-slate-200 rounded-[8px] overflow-hidden">
                  <div className="absolute w-[152px] h-[73px] top-[80px] right-[10px] bg-blue-700 rounded-[4px] overflow-hidden">
                    <div className="absolute w-[108px] top-[18px] left-[22px] text-white lg:font-bold md:text-sm text-center  leading-tight">
                      AWWARDS WINNING
                    </div>
                  </div>
                  <div className="absolute top-[34px] right-[58px] font-bold text-blue-900 lg:text-3xl md:text-2xl text-center leading-tight">
                    647 +
                  </div>
                </div>
                <div className="absolute w-[59px] h-[59px] top-0 right-[90px] bg-[#1195d6] rounded-[29.5px]">
                  <img
                    className="absolute w-[24px] h-[24px] top-[18px] right-[18px]"
                    alt="Anchor"
                    src={anchor}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:inline-flex items-start gap-32  absolute top-90 left-8 md:left-16 lg:left-44 ">
        <div className="relative lg:w-64 md:w-[367px] h-[80px] rounded-[12px] overflow-hidden  bg-blue-900">
          <div className="items-center md:top-[18px] left-4 md:left-8 inline-flex gap-4 md:gap-4 relative">
            <div className="relative w-fit font-heading-2 font-bold text-white text-xl md:text-4xl  leading-tight">
              01
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="relative w-[203px] mt-[-1.00px] font-sans text-white text-base md:text-lg">
              EXPERTISE AND EXPERIENCE
            </div>
          </div>
        </div>

        <div className="relative lg:w-64 md:w-[367px] h-[80px]  rounded-[12px] overflow-hidden  bg-blue-900">
          <div className="inline-flex items-center gap-4 relative top-[18px] left-4 md:left-8">
            <div className="relative w-fit font-heading-2 font-bold text-white text-xl md:text-4xl tracking-wide leading-tight">
              02
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="relative w-[203px] mt-[-1.00px] font-sans text-white text-base md:text-lg">
              COMMITTED TO QUALITY
            </div>
          </div>
        </div>

        <div className="relative lg:w-64 md:w-[367px] h-[80px] rounded-[12px] overflow-hidden  bg-blue-900">
          <div className="inline-flex items-center gap-4 relative top-[18px] left-4 md:left-8">
            <div className="relative w-fit font-heading-2 font-bold text-white text-xl md:text-4xl tracking-wide leading-tight">
              03
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="relative w-[203px] mt-[-1.00px] font-sans text-white text-base md:text-lg">
              COMPREHENSIVE SERVICES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
