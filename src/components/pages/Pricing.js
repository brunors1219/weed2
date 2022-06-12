import React from "react";
import Testimoni from "./Testimoni";
import Maps from "/public/assets/HugeGlobal.svg";

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Onde estamos{" "}
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            Nossos pontos de vendas em todo o mundo.
          </p>
          <div className="py-12 w-full px-8 mt-16">
            <Maps className="w-full h-auto" />
          </div>
          <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
            {/* <Netflix className="h-18 w-auto" /> */}
            <img
              src="/assets/Icon/amazon.png"
              className="h-14 w-auto mt-4 lg:mt-2"
              alt=""
            />
            <img
              src="/assets/Icon/netflix.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/reddit.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/discord.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/spotify.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Depoimentos{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Olha só quem esta dizendo quem já ganhou.
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
