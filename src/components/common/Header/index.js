import React from "react";
import Navbar from "../Navbar"
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <section className="">
        <div className="Header opacity-80 z-50 sticky bg-gray-800 text-white flex gap-4 justify-between p-5">
            <Link href="/" id="pageLogo">
              <span className="text-2xl font-light">Trip</span>
              <span className="text-2xl font-bold">GO</span>
            </Link>
            <Navbar/>
        </div>
        <div className="flex justify-center py-1 border-t bg-gray-600 border-t-gray-600 text-white text-xs">
            <marquee>promotions   promotions  promotions  promotions  promotions  promotions  promotions </marquee>
        </div>
          
      </section>
     
    </>
  );
};
