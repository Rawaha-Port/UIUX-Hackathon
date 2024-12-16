'use client';

import React, { useEffect, useState } from "react";

const Join = () => {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <section
        className="relative w-full h-full bg-cover bg-center bg-[#FDDC5C]"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}
      >
        {/* Top Content */}
        <div
          className="absolute top-[97px] left-[50%] transform -translate-x-[50%] flex flex-col items-center gap-[30px] w-[494px] h-[165px]"
        >
          {/* Top Text */}
          <div className="flex flex-col items-center gap-[12px] w-[494px] h-[111px]">
            {/* Join Heading */}
            <h2 className="font-clash text-4xl font-normal text-center text-white">
              Join the club and get the benefits
            </h2>

            {/* Subheading */}
            <p className="font-satoshi text-lg text-center text-white w-[470px] h-[54px]">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
            </p>
          </div>

          {/* Benefits List */}
          <div className="flex flex-col items-start gap-[12px] w-[442px] h-[96px]">
            <div className="flex items-center gap-[8px] w-full h-[24px]">
              <div className="bg-white w-[16px] h-[16px]"></div>
              <span className="text-white text-center text-sm">Exclusive offers</span>
            </div>
            <div className="flex items-center gap-[8px] w-full h-[24px]">
              <div className="bg-white w-[16px] h-[16px]"></div>
              <span className="text-white text-center text-sm">Free events</span>
            </div>
            <div className="flex items-center gap-[8px] w-full h-[24px]">
              <div className="bg-white w-[16px] h-[16px]"></div>
              <span className="text-white text-center text-sm">Large discounts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
