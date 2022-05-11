import React from 'react';

const TeamCard = ({ img, key, name, job, desc }) => {
  return (
    <div
      className="xl:w-[232px] xl:h-[260px] lg:w-[195px] lg:h-[220px]  group relative"
      key={key}
      //El group es para indicar a Tailwind que se hara el hover a todo el grupo
    >
      <img src={img} className="w-full h-full block" />
      {/*Contenedor absoluto que cambia con hover cuando das hover al altura de hace 100% y aparte el fondo llega hasta abajo mas la transicion para que se vea bonito*/}
      <div className="absolute overflow-hidden bottom-full  left-0 right-0 w-full h-0 bg-black/80   transition-all ease delay-200 duration-[.5s] group-hover:h-full group-hover:bottom-0">
        <div className=" w-4/5 mx-auto mt-5 flex flex-col h-full justify-evenly">
          <h2 className=" text-amarilloThink text-[1.8rem] text-center font-medium">
            {name}
          </h2>
          <div className="text-white  ">
            <p className="text-center xl:text-[1.6rem] lg:text-[1.4rem] font-medium ">
              {job}
            </p>
            <p className="text-center xl:text-[1.2rem] lg:text-[1rem]">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
