import React from "react";
import icon from "../assets/package.svg";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row m-4 lg:mx-36">
      <div className="lg:mr-12 max-w-lg mt-10">
        <div className="text-subheading-2 text-blue-950">CONTACT US</div>
        <p className="text-3xl font-semibold text-blue-950 mb-8 lg:w-[481px]">
          TAKE THE FIRST STEP
          <br /> TO STREAMLINED
          <br /> SHIPPING
        </p>
        <div className="flex items-center gap-4">
          <img
            className="w-[80px] h-[80px] bg-blue-400"
            alt="Icon"
            src={icon}
          />
          <div>
            <div className="text-body-1 font-bold text-dark-blue-2 mb-2">
              Call Us
            </div>
            <div className="text-subheading-2 text-dark-blue-2">
              +2 333 000-0000
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex items-center gap-4">
          <img
            className="w-[80px] h-[80px] bg-blue-400"
            alt="Icon"
            src={icon}
          />
          <div>
            <div className="text-body-1 font-bold text-dark-blue-2 mb-2">
              Email
            </div>
            <div className="text-subheading-2 text-dark-blue-2">
              example@example.com
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex items-center gap-4">
          <img
            className="w-[80px] h-[80px] bg-blue-400"
            alt="Icon"
            src={icon}
          />
          <div>
            <div className="text-body-1 font-bold text-dark-blue-2 mb-2">
              Office
            </div>
            <div className="text-subheading-2 text-dark-blue-2">
              Anywhere Street
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 max-w-lg border p-6 bg-slate-200 w-96 rounded-md">
        <h1 className="text-lg font-bold mb-4">Request a Quote Today</h1>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label
              className="text-body-1 font-bold text-dark-blue-2 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="text-body-1 font-bold text-dark-blue-2 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              className="text-body-1 font-bold text-dark-blue-2 mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Mobile Number"
              name="phone"
              className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              className="text-body-1 font-bold text-dark-blue-2 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type Message"
              rows="1"
              className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-2 transition focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
