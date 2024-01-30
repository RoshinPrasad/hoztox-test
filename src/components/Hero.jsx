import React from "react";
import cargo from "../assets/MAERSK_MC_KINNEY_MÖLLER_&_MARSEILLE_MAERSK_(48694054418).jpg";
import prof from "../assets/profile.png";

function Hero() {
  return (
    <div className="relative w-full max-w-screen-xxl mx-auto bg-black">
      <div className="relative">
        <div className="w-full h-96 md:h-[741px] bg-white overflow-hidden">
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover brightness-50"
              alt="Logistics"
              src={cargo}
            />
            <div className="absolute w-full h-full bg-[#00000099]" />
          </div>
        </div>

        <div className="md:inline-flex items-center space-x-20 absolute top-[333px] left-[8%] md:left-[12%] ">
          <div className="inline-flex items-center space-x-6 sm:text-sm ">
            <img className="w-20 h-20 rounded-md" src={prof} alt="Alt text" />
            <div className="inline-flex flex-col items-start ">
              <div
                className="text-white font-bold text-3xl"
                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
              >
                26 K
              </div>
              <div
                className="text-white"
                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
              >
                Satisfied Clients
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start">
            <div
              className="text-white font-bold text-3xl"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.4)" }}
            >
              12 +
            </div>
            <div
              className="text-white"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
            >
              Years of Experience
            </div>
          </div>

          <div className="md:flex flex-col items-start relative w-full md:w-[350px] mx-auto mt-8 md:justify-end md:right-24 lg:left-24 ">
            <div className="flex items-start rounded-3xl bg-blue-950">
              <div className="bg-blue-950 rounded-l-md p-4 text-white font-bold">
                TRACKING
              </div>
              <div className="bg-blue-700 rounded-r-md p-4 text-gray-700 font-bold">
                RATE &amp; SHIP
              </div>
            </div>
            <div className="relative w-full h-[132px] bg-blue-950 rounded-md overflow-hidden">
              <p className="absolute top-[89px] left-4 text-transparent">
                <span className="text-white">
                  See the tracking id on the shipping document.
                </span>
                <span className="text-blue-500"> Help</span>
              </p>
              <div className="flex items-start gap-4 absolute top-4 left-4">
                <div className="flex-shrink-0 w-[285px] p-4 rounded-md border border-solid border-gray-300 md:w-36 lg:w-56">
                  <div className="text-gray-700 font-bold">TRACKING ID</div>
                </div>
                <button className="flex items-center justify-center gap-2 p-3 bg-blue-600 rounded-md text-white">
                  <div className="font-bold">TRACK</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:inline-flex flex-col items-start space-y-4 absolute top-[110px] left-[8%] md:left-[12%] w-full md:w-[50%] ">
          <div className="md:inline-flex flex-col items-start space-y-2">
            <p
              className="text-white font-bold text-sm md:text-xl lg:text-2xl "
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
            >
              WE ARE THE BEST LOGISTIC COMPANY
            </p>
            <p
              className=" text-white font-extrabold md:text-lg sm:text-base lg:text-2xl brightness-10"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            >
              STREAMLINE YOUR SHIPPING WITH OUR CARGO SERVICES
            </p>
          </div>
          <p
            className=" text-white text-sm md:text-base lg:text-lg"
            style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.1)" }}
          >
            Simplify your shipping process and make it more efficient with our
            <br />
            cargo services. From start to finish, we'll handle everything to
            ensure
            <br />
            your cargo arrives safely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
