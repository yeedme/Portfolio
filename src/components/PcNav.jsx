import React from "react";

export default function PcNav() {
  return (
    <>
      <div className="md:w-full md:h-full flex justify-center">
        <div className="md:w-85vw w-0 md:h-full h-0 overflow-hidden flex justify-between">
            {/* loge */}
          <div className="w-10vw h-full  flex items-center">
            <div className="text-1.5vw">yeedme</div>
          </div>
             {/* Nav */}
          <div className="w-50vw h-full flex items-center justify-center">
            <div className="text-1.5vw w-8vw text-center cursor-pointer">
              home
            </div>
            <div className="text-1.5vw w-8vw text-center cursor-pointer">
              about
            </div>
            <div className="text-1.5vw w-8vw text-center cursor-pointer">
              skills
            </div>
            <div className="text-1.5vw w-8vw text-center cursor-pointer">
              Portfoilo
            </div>
            <div className="text-1.5vw w-8vw text-center cursor-pointer">
              Contant
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
