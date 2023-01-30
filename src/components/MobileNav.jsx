import React, { useEffect, useRef, useState } from "react";
import OpenMobNav from "./OpenMobNav";
import gsap from "gsap";
export default function MobileNav() {
  let openMobNav = useRef(null);
  const [openFlag, setOpenFlag] = useState(true);
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let openMobNavDoc = openMobNav.current;

  //     if (openFlag) {

  //       gsap.to(".openmobnav", {
  //         top: "60%",
  //         ease:"power4.inOut",
  //         duration:1
  //       });
  //     } else {
  //       gsap.to(".openmobnav", {
  //         top: "90%",
  //         ease:"power4.inOut",
  //         duration:.3
  //       });
  //     }
  //   });
  //   return () => ctx.revert();
  // }, [openFlag]);
  const open = () => {
    setOpenFlag(false)
    gsap.to(".openmobnav", {
      top: "60%",
      ease: "power4.inOut",
      duration: 0.3,
    });
  };
  const close = () => {
    setOpenFlag(true)
    gsap.to(".openmobnav", {
      top: "120%",
      ease: "power4.inOut",
      duration: 1,
    });
  };
  return (
    <>
      {/* <OpenMobNav/> */}

      <div
        className="fixed w-screen h-30vh bg-white openmobnavTop openmobnav md:hidden"
        style={{ top: "120%" }}
        ref={openMobNav}
      >
        <OpenMobNav />
      </div>
      <div className=" fixed w-screen bg-white h-10vh md:hidden" style={{ top: "90%" }}>
        <div className="px-5vw flex justify-between items-center w-full h-full">
          <div>yeedme</div>
          {openFlag ? (
            <div className="w-5vh h-5vh" onClick={open}>
              <svg
                t="1673097805673"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3743"
                width="90%"
                height="90%"
              >
                <path
                  d="M409.113 95.852h-299.65c-24.82 0-44.947 20.137-44.947 44.956v299.62c0 24.82 20.127 44.957 44.947 44.957h299.65c24.79 0 44.945-20.137 44.945-44.956V140.808c0-24.82-20.156-44.956-44.945-44.956zM869.771 556.522h-299.66c-24.82 0-44.936 20.116-44.936 44.935v299.64c0 24.821 20.116 44.937 44.937 44.937h299.66c24.8 0 44.936-20.116 44.936-44.936v-299.64c0-24.82-20.137-44.936-44.937-44.936zM937.536 210.565L695.37 82.722c-20.035-10.588-44.876-2.902-55.483 17.114L512.025 342.049c-10.568 20.077-2.892 44.877 17.174 55.505l242.174 127.823c20.056 10.588 44.936 2.902 55.524-17.135L954.72 266.07c10.599-20.076 2.922-44.916-17.184-55.504zM409.113 556.522h-299.65c-24.82 0-44.947 20.116-44.947 44.935v299.64c0 24.821 20.127 44.937 44.947 44.937h299.65c24.79 0 44.945-20.116 44.945-44.936v-299.64c0-24.82-20.156-44.936-44.945-44.936z"
                  fill=""
                  p-id="3744"
                ></path>
              </svg>
            </div>
          ) : (
            <div className="w-5vh h-5vh" onClick={close}>
              <svg
                t="1673269413771"
                
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2684"
                width="100%"
                height="100%"
              >
                <path
                  d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"
                  fill=""
                  p-id="2685"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
