import React from 'react'
import worker from '../assets/worker.jpeg'
import icon from '../assets/package.svg'
import Video from '../components/video'

function Howitworks() {
  return (

       <div className="relative w-full">
          <div className="inline-flex items-start gap-[119px] absolute top-[536px] left-[141px] font-semibold">
            <div className="relative w-[287px] h-[345px] ">
              <div className="inline-flex flex-col items-center gap-[16px] absolute top-[209px] left-0">
                <div className="relative w-[287px] mt-[-1.00px] text-[#121d50]  text-center font-extrabold">
                  REQUEST A QUOTE
                </div>
                <p className="relative w-[287px] font-body-2 font-[number:var(--body-2-font-weight)] text-grey-2  text-center ">
                  we believe in providing our clients with personalized and efficient logistics solutions that meet their
                  unique needs.
                </p>
              </div>
              
              <img className="absolute w-[100px] h-[100px] top-[55px] left-[98px] bg-blue-400 rounded" alt="Icon" src={icon} />
              <div className="inline-flex items-start justify-center px-[16px] py-[8px] absolute top-0 left-[111px] bg-white rounded-[90px] border-2 border-solid ">
                <div className="relative w-fit mt-[-2.00px] font-">
                  Step 1
                </div>
              </div>
            </div>
            <div className="relative w-[287px] h-[345px]">
              <div className="inline-flex flex-col items-center gap-[6px] absolute top-[209px] left-0">
                <div className="relative w-[287px] mt-[-1.00px]  text-[#121d50] font-extrabold text-center ">
                  PROVIDE DETAILS
                </div>
                <p className="relative w-[287px] font-body-2 text-grey-2 text-[length:var(--body-2-font-size)] text-center ">
                  we believe in providing our clients with personalized and efficient logistics solutions that meet their
                  unique needs.
                </p>
              </div>
              <img className="absolute w-[100px] h-[100px] top-[55px] left-[98px] bg-blue-400 rounded" alt="Icon" src={icon} />
              <div className="inline-flex items-start justify-center px-[16px] py-[8px] absolute top-0 left-[111px] bg-white rounded-[90px] border-2 border-solid border-grey-1">
                <div className="relative w-fit mt-[-2.00px] font-caption font-[number:var(--caption-font-weight)] text-[#121d50] text-[length:var(--caption-font-size)] text-center ">
                  Step 2
                </div>
              </div>
            </div>
            <div className="relative w-[287px] h-[345px]">
              <div className="inline-flex flex-col items-center gap-[6px] absolute top-[209px] left-0">
                <div className="relative w-[287px] mt-[-1.00px] text-[#121d50]  text-center font-extrabold">
                  SCHEDULE PICK-UP
                </div>
                <p className="relative w-[287px] font-body-2 font-[number:var(--body-2-font-weight)] text-grey-2 text-[length:var(--body-2-font-size)] text-center ">
                  we believe in providing our clients with personalized and efficient logistics solutions that meet their
                  unique needs.
                </p>
              </div>
              <img className="absolute w-[100px] h-[100px] top-[55px] left-[98px] bg-blue-400 rounded" alt="Icon" src={icon} />
              <div className="inline-flex items-start justify-center px-[16px] py-[8px] absolute top-0 left-[111px] bg-white rounded-[90px] border-2 border-solid border-grey-1">
                <div className="relative w-fit mt-[-2.00px] font-caption text-[#121d50]  text-center">
                  Step 3
                </div>
              </div>
            </div>
          </div>
         
          
          <p className="absolute w-[580px] top-[305px] left-[710px] font-light text-blue-800">
            we believe in providing our clients with personalized and efficient logistics solutions that meet their unique
            needs. With years of experience and a team of experts, we are dedicated to empowering your business with
            seamless shipping experiences.
          </p>
          <div className="inline-flex flex-col items-start gap-[6px] absolute top-[110px] left-[710px]">
            <div className="relative w-fit mt-[-1.00px] font-bold text-blue-900">
              HOW IT WORKS
            </div>
            <p className="relative w-[580px] font-extrabold text-3xl text-blue-950">
              SIMPLIFY YOUR SHIPPING <br /> EXPERIENCE WITH<br />  OUR EASY STEP PROCESS
            </p>
          </div>
          <div className="absolute w-[506px] h-[336px] top-[110px] left-[150px] rounded-[12px] overflow-hidden">
            <div className="relative w-[556px] h-[372px] top-[-18px] left-[-25px] bg-dark-blue-1">
              <img
                className="absolute w-[506px] h-[336px] top-[18px] left-[25px] object-cover"
                alt="Smiling female"
                src={worker}
              />
            </div>
          </div>
          
    </div>
       
      );
    }


export default Howitworks