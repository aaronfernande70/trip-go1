import React from "react";
import Navbar from "../Navbar"

export const Header = () => {
  return (
    <section className="Header opacity-80 z-50 sticky bg-gradient-to-b from-black via-black flex gap-4 justify-between p-5">
      <div id="pageLogo">
        <span className="text-2xl font-extralight">Trip</span>
        <span className="text-2xl font-bold">GO</span>
      </div>
        <Navbar/>
    </section>
  );
};
