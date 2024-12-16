import React from 'react';
const BrandStorySection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between p-[60px] gap-[16px] w-full h-auto bg-white lg:w-[1440px] h-[598px]">
      {/* Text Block (on the left) */}
      <div className="w-full lg:w-[634px] h-auto lg:h-[478px] bg-white lg:bg-[#2A254B] relative p-4">
        {/* Top Content */}
        <div className="absolute top-[36px] left-[32px] w-full lg:w-[278px] h-auto lg:h-[103px] flex flex-col items-start gap-[12px]">
          {/* Heading Text */}
          <h4 className="w-[240px] h-[28px] lg:w-[383px] h-[39px] font-clash-display text-white text-[20px] leading-[140%]">
            It started with a small idea
          </h4>

          {/* Subheading Text */}
          <p className="w-full lg:w-[495px] h-[48px] font-satoshi text-white text-[18px] leading-[150%]">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
        </div>

        {/* Button */}
        <div className="absolute top-[195px] left-[32px] lg:pt-16 pr-32 pb-16 pl-32 left-[64px] top-[368px] flex justify-center items-center w-full lg:w-[170px] h-[56px] bg-[rgba(249,249,249,0.15)]">
          <button className="w-[106px] h-[24px] lg:w-[106px] h-[24px]  font-satoshi text-white text-[16px] leading-[150%]">
          View Collection
          </button>
        </div>
      </div>

      {/* Image Block (on the right) */}
      <div className="relative w-full lg:w-[630px] h-[478px] bg-cover bg-center" style={{ backgroundImage: "\Story.jpg" }} />
      <img
          src="\Story.jpg" 
          alt="Furniture"
          className="relative w-full lg:w-[630px] h-[478px] bg-cover bg-center"
        />
    </div>
  );
}

export default BrandStorySection;
