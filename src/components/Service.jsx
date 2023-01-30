import React from "react";

export default function Service() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-around items-center">
          <div className="w-full h-10vh bg-red-100">
            <div className="text-5xl text-center">About</div>
            <div className="text-2xl text-center">what i do</div>
          </div>
          <div className="w-80vw h-60vh flex justify-between flex-warp ">
            <div className="md:h-40vh md:w-18vw w-35vw h-30vh  md:bg-gray-100 rounded-xl p-8 flex-shrink-0 flex items-end">
              <div className="h-25vh w-full">
                <div className="w-5vw h-5vw bg-red-100">
                
                </div>
                <div className=" h-5vw bg-red-100">
                  <h2 className="text-lg">web</h2>
                  <h2 className="text-lg">Designer</h2>
                </div>
                <div className="h-5vw">
                View More ->
              </div>
              </div>     
            </div>
            <div className="md:h-40vh md:w-18vw w-35vw h-30vh  md:bg-gray-100 rounded-xl p-8 flex-shrink-0 flex items-end">
              <div className="h-25vh w-full">
                <div className="w-5vw h-5vw bg-red-100">
                
                </div>
                <div className=" h-5vw bg-red-100">
                  <h2 className="text-lg">web</h2>
                  <h2 className="text-lg">Designer</h2>
                </div>
                <div className="h-5vw">
                View More ->
              </div>
              </div>     
            </div>
            <div className="md:h-40vh md:w-18vw w-35vw h-30vh  md:bg-gray-100 rounded-xl p-8 flex-shrink-0 flex items-end">
              <div className="h-25vh w-full">
                <div className="w-5vw h-5vw bg-red-100">
                
                </div>
                <div className=" h-5vw bg-red-100">
                  <h2 className="text-lg">web</h2>
                  <h2 className="text-lg">Designer</h2>
                </div>
                <div className="h-5vw">
                View More ->
              </div>
              </div>     
            </div>
            
            {/* <div className="md:h-40vh md:w-18vw bg-gray-100 rounded-xl p-8 "></div>
            <div className="md:h-40vh md:w-18vw bg-gray-100 rounded-xl p-8 "></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
