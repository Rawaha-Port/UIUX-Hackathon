"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f5e7dc] flex flex-col-reverse lg:flex-row items-center relative">
      {/* Image Section */}
      <div className="w-full lg:w-full h-[300px] lg:h-[600px] relative">
        <img
          src="Hero image.jpg" 
          alt="Furniture"
          className="w-full h-full object-cover"
        />
        
        {/* Text Box Positioned Over Image */}
        <div className="absolute bg-white w-[630px] h-[444px] left-[730px] top-[130px] p-[48px_61px_46px_56px] gap-0">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-[20px]">
            <h2 className="font-[Clash Display] font-normal text-[32px] leading-[140%] text-[#22202E] w-[513px] h-[90px]">
              Luxury homeware for people who love timeless design quality
            </h2>
            <p className="font-[Satoshi] font-normal text-[18px] leading-[150%] text-[#5B5676] w-[343px] h-[27px]">
              Shop the new Spring 2022 collection today
            </p>
          </div>

          {/* Button */}
          <button className="absolute flex flex-row items-start p-[16px_32px] gap-[10px] w-[170px] h-[56px] left-[56px] top-[342px] bg-[#F9F9F9] text-[#2A254B] font-[Satoshi] font-normal text-[16px] leading-[150%]">
            View collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
