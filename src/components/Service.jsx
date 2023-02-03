import React from "react";
import { useState } from "react";

export default function Service() {
  const [maskShow,setMaskShow]=useState('none');
  const showMask=()=>{
    console.log("yes");
    setMaskShow('block');
  }
  const closeMask=()=>{
    setMaskShow('none');
  }
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-around items-center">
          <div className="w-full h-10vh bg-red-100">
            <div className="text-5xl text-center">About</div>
            <div className="text-2xl text-center">what i do</div>
          </div>
          <div className="md:w-80vw w-90vw h-60vh flex justify-between flex-wrap bg-red-100 ">
            <div className="md:h-40vh md:w-18vw w-40vw h-25vh  md:bg-gray-100 bg-white rounded-xl md:px-8 px-4 pb-2 flex-shrink-0 flex items-end">
              <div className="h-25vh w-full flex items-end">
                <div>
                  <div className="md:w-5vw md:h-5vw w-5vh h-5vh ">
                    <svg
                      t="1675396646525"
                     
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5789"
                      width="100%"
                      height="100%"
                    >
                      <path
                        d="M1000.342857 196.228571c12.571429 0 22.857143-10.285714 22.857143-22.857142v-49.028572c0-13.257143-10.742857-24-24-24H24.228571c-13.257143 0-24 10.742857-24 24v774.971429c0 13.257143 10.742857 24 24 24h974.971429c13.257143 0 24-10.742857 24-24V263.657143c0-12.571429-10.285714-22.857143-22.857143-22.857143s-22.857143 10.285714-22.857143 22.857143V292.571429H45.942857V146.057143h931.542857v27.314286c0 12.571429 10.285714 22.857143 22.857143 22.857142z m-22.857143 681.371429H265.142857V338.285714h712.342857v539.314286zM219.428571 338.285714v539.314286H45.942857V338.285714H219.428571z"
                        p-id="5790"
                      ></path>
                    </svg>
                  </div>

                  <div className=" my-4 ">
                    <h2 className="text-lg">web</h2>
                    <h2 className="text-lg">Designer</h2>
                  </div>

                  <div className="md:h-3vw h-5vh text-sm text-gray-500 cursor-pointer" onClick={showMask}>
                    View More -
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mask */}
          <div className="w-50vw h-60vh bg-blue-100 absolute z-10" style={{display:maskShow}} onClick={closeMask}> 

          </div>          
        </div>
      </div>
    </>
  );
}
