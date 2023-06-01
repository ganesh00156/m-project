import React from "react";
import Navbar from "../navbar";

const TopBar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative">
        <img
          className="w-full h-auto"
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/Haven1_Hero_5_2600x1400_a23f540f5f.jpg"
          alt="Haven1_Hero_5"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl font-semibold lg:text-left">
            SpaceX Rockets
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
