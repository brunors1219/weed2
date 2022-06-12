import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Regulamento
          </h3>
          <p className="my-2 text-black-500">
            Explicação sobre regulamento e dados da forma de postagem da chave da NFe.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              Passo 1 -
            </li>
            <li className="relative circle-check custom-list">
              Passo 2 -
            </li>
            <li className="relative circle-check custom-list">
              Passo 3 - 
            </li>
            <li className="relative circle-check custom-list">
              Passo 4 - 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
