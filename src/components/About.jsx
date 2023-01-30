import React from "react";
import me from "../static/me.jpg";
export default function About() {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-wrap md:flex-row items-center justify-center ">
      {/* titiel */}
      <div className="h-10vh w-screen flex-shrink-0  flex justify-center items-center">
        <div className="text-5xl">About</div>
      </div>
      {/* img me */}
      <div className="flex-shrink-0 h-30vh  w-30vh md:w-28vw  md:h-28vw flex justify-center items-center">
        <img className="h-full w-full rounded-2xl " src={me} />
      </div>
      <div className=" flex-shrink-0 md:w-50vw md:h-30vw md:mx-2vw" >

     
      <div className="h-28vh w-screen md:w-full flex justify-center items-center ">
        <div className="h-30vh  w-screen md:w-full flex justify-around items-center">
          {/* Experience_ICON */}
          <div className="h-28vw w-28vw md:w-10vw md:h-10vw bg-gray-100 flex-shrink-0 rounded-2xl border-2 flex justify-around flex-col items-center">
            <div className="h-10vw w-10vw md:w-5vw md:h-5vw">
              <svg
                t="1673323362885"
         
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2885"
                width="100%"
                height="100%"
              >
                <path
                  d="M349.392593 286.245926 349.392593 815.407407l203.851852-189.345185 203.851852 189.345185L757.096296 286.245926 349.392593 286.245926 349.392593 286.245926zM669.771852 208.592593l-402.962963 0 0 529.161481 38.874074-38.874074L305.682963 247.466667l364.088889 0L669.771852 208.592593 669.771852 208.592593z"
                  fill="#515151"
                  p-id="2886"
                ></path>
              </svg>
            </div>
            <div>Experience</div>
            <div className="text-xs text-gray-500">8 + Your</div>
          </div>
          <div className="h-28vw w-28vw md:w-10vw md:h-10vw bg-gray-100 flex-shrink-0 rounded-2xl border-2 flex justify-around flex-col items-center">
            <div className="h-10vw w-10vw md:w-5vw md:h-5vw">
              <svg
                t="1673323362885"
         
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2885"
                width="100%"
                height="100%"
              >
                <path
                  d="M349.392593 286.245926 349.392593 815.407407l203.851852-189.345185 203.851852 189.345185L757.096296 286.245926 349.392593 286.245926 349.392593 286.245926zM669.771852 208.592593l-402.962963 0 0 529.161481 38.874074-38.874074L305.682963 247.466667l364.088889 0L669.771852 208.592593 669.771852 208.592593z"
                  fill="#515151"
                  p-id="2886"
                ></path>
              </svg>
            </div>
            <div>Experience</div>
            <div className="text-xs text-gray-500">8 + Your</div>
          </div>
          <div className="h-28vw w-28vw md:w-10vw md:h-10vw bg-gray-100 flex-shrink-0 rounded-2xl border-2 flex justify-around flex-col items-center">
            <div className="h-10vw w-10vw md:w-5vw md:h-5vw">
              <svg
                t="1673323362885"
         
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2885"
                width="100%"
                height="100%"
              >
                <path
                  d="M349.392593 286.245926 349.392593 815.407407l203.851852-189.345185 203.851852 189.345185L757.096296 286.245926 349.392593 286.245926 349.392593 286.245926zM669.771852 208.592593l-402.962963 0 0 529.161481 38.874074-38.874074L305.682963 247.466667l364.088889 0L669.771852 208.592593 669.771852 208.592593z"
                  fill="#515151"
                  p-id="2886"
                ></path>
              </svg>
            </div>
            <div>Experience</div>
            <div className="text-xs text-gray-500">8 + Your</div>
          </div>
        </div>
     
      </div>
      <div className="h-20vh w-screen md:w-50vw px-4 flex justify-center items-center  ">
        <div className="text-gray-500 ">
          Frontend developer , i create web pages with UI/UX user interface ,I have years of experience and many clientes are happy with the projecet carried out 
        </div>
      </div>
      </div>
    </div>
  );
}
