// components/Navbar.tsx
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="relative w-full h-[132px] bg-white">
      {/* Desktop Navbar */}
      <div className="hidden md:flex">
        {/* Avion Brand */}
        <div className="absolute left-[687px] top-[20px]">
          <Link href="/">
            <span className="text-[24px] font-semibold text-[#22202E]">Avion</span>
          </Link>
        </div>

        {/* Main Links */}
        <div className="absolute left-[382px] top-[90px] flex space-x-[44px]">
          {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map(
            (item, index) => (
              <Link href={`/${item.toLowerCase().replace(" ", "-")}`} key={index}>
                <span className="text-[16px] font-normal text-[#726E8D] hover:text-black">
                  {item}
                </span>
              </Link>
            )
          )}
        </div>

        {/* Divider */}
        <div className="absolute top-[70px] left-0 right-0 border-t border-[#E0E0E0]"></div>

        {/* Icons (Search, Avatar, Cart) */}
        <div className="absolute top-[26px] flex items-center space-x-6 right-8">
          {/* Search Icon */}
          <div className="w-[16px] h-[16px] bg-[#2A254B]"></div>

          {/* Avatar */}
          <div className="w-[16px] h-[16px] bg-[#2A254B] rounded-full"></div>

          {/* Shopping Cart */}
          <div className="w-[16px] h-[16px] bg-[#2A254B] rounded-full"></div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-6 w-[390px] h-[69px]">
        {/* Brand */}
        <Link href="/">
          <span className="text-[24px] font-normal text-[#22202E]">Avion</span>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center space-x-5">
          {/* Search Icon */}
          <div className="w-[16px] h-[16px] bg-[#2A254B]"></div>

          {/* Menu Icon */}
          <div className="w-[16px] h-[16px] bg-[#2A254B]"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
