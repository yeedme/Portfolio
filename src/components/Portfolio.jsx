import React, { useEffect } from "react";
import PcNav from "./PcNav";
import Home from "./Home";
import MobileNav from "./MobileNav";
import Skills from "./Skills";
import About from "./About";
import Service from "./Service";
export default function Portfolio() {
  return (
    <>
      <div className="fixed w-screen md:h-5vw h-0 bg-white z-50">
        <PcNav />
      </div>
      <div>
        <MobileNav />
      </div>

      <div className="w-screen h-screen">
        <Home />
      </div>
      <div className="w-screen h-screen">
        <About />
      </div>
      <div className="w-screen h-screen "><Skills/></div>
      <div className="w-screen h-screen "><Service/></div>
    </>
  );
}
