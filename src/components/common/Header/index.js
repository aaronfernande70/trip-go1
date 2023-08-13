import React from "react";
import Navbar from "../Navbar"
import Link from "next/link";

export const Header = () => {
  return (
    <section className="Header opacity-80 z-50 sticky bg-gradient-to-b from-black via-black flex gap-4 justify-between p-5">
      <Link href="/" id="pageLogo">
        <span className="text-2xl font-light">Trip</span>
        <span className="text-2xl font-bold">GO</span>
      </Link>
        <Navbar/>
    </section>
  );
};
