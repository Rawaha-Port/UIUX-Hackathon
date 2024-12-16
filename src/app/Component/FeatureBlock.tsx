import React from 'react';

const FeatureBlock: React.FC = () => {
  return (
    <div className="relative w-full bg-white py-[40px]">
      {/* Heading - What makes our brand different */}
      <div className="text-center mb-[40px]">
        <h3 className="font-clash text-[#2A254B] text-[24px] leading-[140%] md:text-[28px]">
          What makes our brand different
        </h3>
      </div>

      {/* Feature Blocks */}
      <div className="flex flex-wrap justify-between gap-[24px] px-[20px] md:px-[40px]">
        
        {/* Feature Block 1 */}
        <div className="flex flex-col items-start p-[24px] gap-[12px] w-full md:w-[48%] lg:w-[23%] bg-[#F9F9F9]">
          <div className="flex-none w-[24px] h-[24px] bg-white mb-[16px]" />
          <h4 className="text-[#2A254B] font-clash text-[20px] leading-[140%]">
            Next day as standard
          </h4>
          <p className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        {/* Feature Block 2 */}
        <div className="flex flex-col items-start p-[24px] gap-[12px] w-full md:w-[48%] lg:w-[23%] bg-[#F9F9F9]">
          <div className="flex-none w-[24px] h-[24px] bg-white mb-[16px]" />
          <h4 className="text-[#2A254B] font-clash text-[20px] leading-[140%]">
            Made by true artisans
          </h4>
          <p className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        {/* Feature Block 3 */}
        <div className="flex flex-col items-start p-[24px] gap-[12px] w-full md:w-[48%] lg:w-[23%] bg-[#F9F9F9]">
          <div className="flex-none w-[24px] h-[24px] bg-white mb-[16px]" />
          <h4 className="text-[#2A254B] font-clash text-[20px] leading-[140%]">
            Unbeatable prices
          </h4>
          <p className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        {/* Feature Block 4 */}
        <div className="flex flex-col items-start p-[24px] gap-[12px] w-full md:w-[48%] lg:w-[23%] bg-[#F9F9F9]">
          <div className="flex-none w-[24px] h-[24px] bg-white mb-[16px]" />
          <h4 className="text-[#2A254B] font-clash text-[20px] leading-[140%]">
            Recycled packaging
          </h4>
          <p className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">
            We use 100% recycled to ensure our footprint is more manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
