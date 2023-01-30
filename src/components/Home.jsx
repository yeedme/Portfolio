import React from "react";
import me from "../static/me.jpg";
export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center  ">
        <div className="w-85vw h-full flex flex-col justify-center ">
          {/* 减去Nav的高度 */}
          <div className=" w-full md:h-5vw  shrink-0" />
          {/* 内容 */}
          <div className="w-full flex flex-wrap ">
            {/* icons */}
            <div className=" md:w-10vw w-12vw md:h-full shrink-0 mt-3vw">
              {/* 微信icon */}
              <div className="md:w-3vw w-8vw  md:h-3vw h-8100%cursor-pointer flex justify-center items-center m-1vw ">
                <svg
                  t="1671797290716"
                  viewBox="0 0 1193 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2691"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M806.287212 309.998684c13.642769 0 27.127442 1.050875 40.528417 2.631837C810.407012 133.842355 629.080008 1.032275 422.076327 1.032275 190.688636 1.032275 1.112733 167.275045 1.112733 378.379926c0 121.864245 63.061771 221.92052 168.465415 299.536438l-42.100079 133.470365 147.122433-77.783315c52.692523 10.992333 94.922799 22.27296 147.475825 22.27296 13.20568 0 26.309062-0.678884 39.310147-1.757657-8.2396-29.666281-13.001085-60.727528-13.001085-92.960546 0-193.8538 157.910172-351.159486 357.901823-351.159487z m-226.356512-120.301883c31.684332 0 52.683223 21.975367 52.683222 55.370858 0 33.255994-20.998891 55.519654-52.692522 55.519654-31.544835 0-63.191968-22.27296-63.191968-55.519654 0-33.39549 31.647133-55.370858 63.191968-55.370858zM285.323142 300.596612c-31.554135 0-63.405863-22.27296-63.405863-55.528953 0-33.39549 31.851728-55.370858 63.405863-55.370858 31.544835 0 52.543726 21.975367 52.543726 55.370858 0 33.255994-20.998891 55.519654-52.543726 55.519654z"
                    p-id="2692"
                  ></path>
                  <path
                    d="M1190.460898 655.8201c0-177.393199-168.400317-321.986094-357.557732-321.986094-200.289244 0-358.04132 144.592894-358.041319 321.986094 0 177.700092 157.752075 321.976794 358.041319 321.976794 41.923384 0 84.237358-11.159729 126.328138-22.27296l115.447401 66.651484-31.656433-110.881212c84.507051-66.80958 147.438625-155.417832 147.438626-255.474106z m-473.618918-55.519654c-20.961692 0-42.127979-21.966067-42.127978-44.387824 0-22.114864 21.166287-44.369224 42.127978-44.369224 31.823828 0 52.683223 22.25436 52.683223 44.369224 0 22.412457-20.859394 44.387824-52.683223 44.387824z m231.536487 0c-20.831495 0-41.830386-21.966067-41.830386-44.387824 0-22.114864 20.998891-44.369224 41.830386-44.369224 31.544835 0 52.683223 22.25436 52.683223 44.369224 0 22.412457-21.138388 44.387824-52.683223 44.387824z"
                    p-id="2693"
                  ></path>
                </svg>
              </div>

              {/* QQicon */}
              <div className="md:w-3vw w-8vw  md:h-3vw h-8vw cursor-pointer flex justify-center items-center m-1vw">
                <svg
                  t="1671797593878"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3798"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M936.194300839506 691.6934192494618c-5.891587367822223-94.26540047423211-70.69904970840491-170.8560375504593-106.04857520987652-212.09715041975304 5.891587367822223-11.783174735644446 17.674762103466666-79.53643140740742-29.457938133649378-126.66913164452346V349.981342854005c0-182.63921228610366-129.61492468116543-315.1999312984493-294.57937486380246-315.1999312984493s-294.57937615834066 132.5607190123457-294.57937615834066 315.1999312984493v2.9457943311802466c-47.132700237116055 47.132700237116055-35.349525501471604 114.885956908879-29.45793683911111 126.66913164452346-35.349525501471604 41.24111286929382-100.15698784205432 117.83174994552098-106.04857520987652 212.09715041975304 0 23.56634947128889 2.9457943311802466 58.91587497276049 14.728969066824689 76.59063707622718 14.728969066824689 20.62055643464691 55.97008193611851-2.9457943311802466 82.48222444404936-64.80746234058272 8.837381699002469 29.457938133649378 26.51214380246913 73.64484403958517 67.75325667176295 126.66913164452346-70.69904970840491 14.728969066824689-88.37381310640988 85.42801877522965-64.80746234058272 123.72333731334321 17.674762103466666 26.51214380246913 53.02428760493826 47.132700237116055 120.77754298216297 47.132700237116055 114.885956908879 0 167.9102445138173-32.40373117029136 191.4765952796444-53.02428760493826 5.891587367822223-5.891587367822223 11.783174735644446-5.891587367822223 20.620555140108642-5.891587367822223 8.837381699002469 0 14.728969066824689 2.9457943311802466 20.62055643464691 5.891587367822223 23.56634947128889 20.62055643464691 73.64484403958517 53.02428760493826 191.4765939851062 53.02428760493826 64.80746234058272 0 103.10278087869627-20.62055643464691 120.77754427670124-47.132700237116055 23.56634947128889-38.29531853811359 2.9457943311802466-106.04857520987652-64.80746234058272-123.72333731334321 41.24111286929382-55.97008193611851 58.91587497276049-100.15698784205432 67.75325667176295-126.66913164452346 29.457938133649378 61.86166930394074 67.75325667176295 85.42801877522965 82.48222444404936 64.80746234058272 5.891587367822223-17.674762103466666 11.783174735644446-53.02428760493826 8.837381699002469-76.59063707622718z m0 0"
                    fill=""
                    p-id="3799"
                  ></path>
                </svg>
              </div>

              {/* Githbubicon */}
              <div className="md:w-3vw w-8vw  md:h-3vw h-8vw cursor-pointer flex justify-center items-center m-1vw">
                <svg
                  t="1671797721228"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4708"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    p-id="4709"
                  ></path>
                </svg>
              </div>
            </div>
            {/* handsome boy*/}
            <div className=" md:w-35vw w-60vw md:h-full  shrink-0 flex justify-center ">
              <div className="borderRadiusOne md:w-25vw w-35vw md:h-25vw h-35vw border-2 border-gray-50 overflow-hidden"></div>
              <div className="borderRadiusTwo md:w-25vw w-35vw md:h-25vw h-35vw border-gray-50 absolute  overflow-hidden">
                <img
                  src={me}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            {/* center context */}
            <div className="md:w-35vw w-80vw h-35vw shrink-0 ">
              <div className="md:text-3vw text-10vw text-gray flex items-center mb-1vw mt-3vw font-semibold" >
                y e e d m e
                <svg
                  t="1671798931725"
                 
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9581"
                  width="3vw"
                  height="3vw"
                >
                  <path
                    d="M880.601504 413.834586c0 180.932331-146.285714 327.218045-327.218045 327.218046s-327.218045-146.285714-327.218045-327.218046 146.285714-327.218045 327.218045-327.218045c180.290727 0 327.218045 146.927318 327.218045 327.218045z m0 0"
                    fill="#FDDF6D"
                    p-id="9582"
                  ></path>
                  <path
                    d="M623.318296 692.932331c-180.932331 0-327.218045-146.285714-327.218045-327.218045 0-96.240602 41.704261-183.498747 108.431077-243.16792-105.864662 53.894737-178.365915 164.250627-178.365914 291.28822 0 180.932331 146.285714 327.218045 327.218045 327.218046 84.050125 0 161.042607-32.080201 218.786967-84.050126-44.912281 23.097744-95.598997 35.929825-148.85213 35.929825z m0 0"
                    fill="#FCC56B"
                    p-id="9583"
                  ></path>
                  <path
                    d="M600.862155 633.904762c-73.142857 0-132.170426-59.027569-132.170426-132.170426h264.982456c-0.641604 72.501253-59.669173 132.170426-132.81203 132.170426z m0 0M536.06015 313.102757c0 21.814536-17.964912 39.779449-39.779448 39.779449-21.814536 0-39.779449-17.964912-39.779449-39.779449 0-21.814536 17.964912-39.779449 39.779449-39.779449 21.814536-0.641604 39.779449 17.323308 39.779448 39.779449z m0 0M760.621554 313.102757c0 21.814536-17.964912 39.779449-39.779449 39.779449-21.814536 0-39.779449-17.964912-39.779448-39.779449 0-21.814536 17.964912-39.779449 39.779448-39.779449 22.45614-0.641604 39.779449 17.323308 39.779449 39.779449z m0 0"
                    fill="#7F184C"
                    p-id="9584"
                  ></path>
                  <path
                    d="M603.428571 578.726817c-35.929825-16.681704-75.709273-14.115288-107.789473 3.20802 24.380952 31.438596 62.235589 51.969925 105.223057 51.969925 18.606516 0 36.571429-3.849624 53.253133-10.907268-12.190476-18.606516-29.513784-34.005013-50.686717-44.270677z m0 0"
                    fill="#FC4C59"
                    p-id="9585"
                  ></path>
                  <path
                    d="M412.230576 393.944862c-24.380952 0-44.270677 19.889724-44.270676 44.270677h87.899749c0.641604-24.380952-19.24812-44.270677-43.629073-44.270677z m0 0M796.551378 388.170426c-24.380952 0-44.270677 19.889724-44.270676 44.270677h87.899749c0-25.022556-19.889724-44.270677-43.629073-44.270677z m0 0"
                    fill="#F9A880"
                    p-id="9586"
                  ></path>
                  <path
                    d="M503.338346 501.092732v20.531328c0 8.982456 7.057644 16.0401 16.0401 16.0401h168.741855c8.982456 0 16.0401-7.057644 16.0401-16.0401v-20.531328H503.338346z m0 0"
                    fill="#F2F2F2"
                    p-id="9587"
                  ></path>
                  <path
                    d="M631.659148 141.152882c36.571429 10.265664 60.952381 35.288221 55.177945 55.177945-5.774436 20.531328-39.779449 28.230576-76.350877 17.964912-36.571429-10.265664-60.952381-35.288221-55.177945-55.177945 5.774436-19.889724 39.779449-28.230576 76.350877-17.964912z m0 0"
                    fill="#FCEB88"
                    p-id="9588"
                  ></path>
                </svg>
              </div>
              <p className="text-gray-500 mb-3vw ">————Front End Development</p>
              <p className="text-gray-400">
                I'm Front End Development,and I'm very passionate and dedicated
                to my work..
              </p>

         
                {/* 打招呼按钮 */}
                <div className="md:w-12vw w-35vw md:h-5vw h-10vw  bg-black flex justify-center items-center rounded-xl mt-3vw">
                  <p className="text-white mr-2">say hello</p>
                  <svg
                    t="1671799571262"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="10678"
                    width="2vw"
                    height="2vw"
                  >
                    <path
                      d="M950.186667 164.693333a42.666667 42.666667 0 0 0-42.666667-14.293333l-832 192a42.666667 42.666667 0 0 0-21.333333 69.76l134.186666 153.386667-58.026666 213.333333a42.666667 42.666667 0 0 0 66.56 45.653333l405.333333-298.666666a42.666667 42.666667 0 1 0-50.773333-68.693334L244.053333 682.666667l31.786667-116.266667a42.666667 42.666667 0 0 0-9.173333-39.466667l-102.186667-117.333333 680.106667-157.013333L621.226667 768l-85.333334-56.96a42.666667 42.666667 0 1 0-47.36 70.826667l128 85.333333A41.386667 41.386667 0 0 0 640 874.666667a47.786667 47.786667 0 0 0 12.16-1.706667 42.666667 42.666667 0 0 0 26.88-24.106667l277.333333-640a42.666667 42.666667 0 0 0-6.186666-44.16z"
                      fill="#e6e6e6"
                      p-id="10679"
                      data-spm-anchor-id="a313x.7781069.0.i7"
                 
                    ></path>
                  </svg>
                </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
