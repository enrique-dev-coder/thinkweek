import React from 'react';

const NewLoadingScreen = () => {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center space-y-10">
        <h1 className="text-white text-[3rem]">
          <b>Think</b> Week
        </h1>
        <div className="relative">
          <div className="w-[20px] animationfirstcircle h-[20px] border top-[43%] right-[70%] border-white absolute z-10 rounded-full"></div>
          <div className="w-[20px] animationsecondcircle h-[20px] border top-[43%] right-[45%] border-white absolute z-10 rounded-full"></div>
          <div className="w-[20px] animationthirdcircle h-[20px] border top-[43%] right-[20%] border-white absolute z-10 rounded-full"></div>

          <img
            src="/img/loader.png"
            alt="conoce a thinkweek"
            className="w-[120px] h-[120px] relative z-0"
          />
        </div>
        <p className="uppercase text-white text-[1.8rem]">
          PARA UNA MAYOR EXPERIENCIA, ACTIVA EL AUDIO
        </p>
      </div>
    </div>
  );
};

export default NewLoadingScreen;
