import React from "react";
import wallpaper from '../assets/video.jpeg';
import play from '../assets/play.svg';

function video() {
    return (
        <div className="relative w-full h-[441px] bg-white overflow-hidden" style={{ marginTop: '950px' }}>
          <div className="relative w-[1528px] h-[859px] top-[-108px] left-[-44px]">
            <div className="absolute w-[1528px] h-[859px] top-0 left-0 overflow-hidden">
              <div className="relative w-[1665px] h-[1110px] top-[42px] left-[-90px] bg-blue-2">
                <img
                  className="absolute w-[1440px] h-[741px] top-[66px] left-[134px] object-cover"
                  alt="Maksym kaharlytskyi"
                  src={wallpaper}
                />
                <div className="absolute w-[1510px] h-[774px] top-[50px] left-[99px] bg-[#09123b8f]" />
              </div>
            </div>
            <div className="absolute w-[60px] h-[60px] top-[313px] left-[730px] bg-white rounded-[66px]">
              <img className="absolute w-[30px] h-[30px] top-[16px] left-[18px]" alt="Play" src={play} />     
            </div>
            <div className="inline-flex flex-col items-center gap-[16px] absolute top-[218px] left-[474px]">
              <div className="relative w-[580px] mt-[-1.00px] font-mono text-3xl text-white  text-center ">
                SEE IT IN ACTION
              </div>
              <p className="relative w-[510px] font-body-1 font-[number:var(--body-1-font-weight)] text-white text-[length:var(--body-1-font-size)] text-center tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                Watch Our Video to Get a Clear Understanding of How It Works
              </p>
            </div>
          </div>
        </div>
      );
    };

export default video


