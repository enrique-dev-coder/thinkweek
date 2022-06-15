import React, { useEffect, useState } from 'react';
import VolumeButton2 from './VolumeButton2';
import Link from 'next/link';
//Propiedades para la clase pasar left de 100 a 60
//100 es cuando esta oculto

const NewMenu = ({ isMenuActive, CloseMenu }) => {
  const [animacionBarrita, setAnimacionBarrita] = useState(false);

  //el useEffect es para detectar el cambio del componente le ponemos que se haga falso el estado de la animacion de la barrita
  //para que cada que se cierre el menu el useEffect detecte el cambio y se corra la funcion de la animacion tra vez
  //cuando el componente cambia a estar activado empieza una funcion de setTimeOut para que lo pueda ver el usuario el efecto

  useEffect(() => {
    isMenuActive
      ? setTimeout(() => {
          setAnimacionBarrita(true);
        }, 500)
      : setAnimacionBarrita(false);
  }, [isMenuActive]);

  const linkMenu = [
    {
      id: 1,
      title: 'Home',
      link: '/',
    },
    {
      id: 2,
      title: 'Parar',
      link: '/Parar',
    },
    {
      id: 3,
      title: 'Pensar',
      link: '/Pensar',
    },
    {
      id: 4,
      title: 'Actuar',
      link: '/Actuar',
    },
    {
      id: 5,
      title: 'Nosotros',
      link: '/nosotros',
    },
  ];
  return (
    <div
      className={`${
        isMenuActive ? 'left-0 md:left-[50%]' : 'left-[100%]'
      } h-screen xl:w-3/4 lg:w-4/5 flex flex-col  justify-center w-full  bg-black fixed  z-30 top-0 right-0 transition-all duration-500 `}
    >
      <div className=" w-10/12 h-[45%]  mx-auto flex flex-col justify-between ">
        <div className=" text-white text-[3rem] w-full lg:w-1/2 flex justify-end">
          <VolumeButton2 color="white" />
          <div className="cursor-pointer" onClick={CloseMenu}>
            <img src="/img/closenewmenu.svg" width={'25px'} />
          </div>
        </div>
        {linkMenu.map((l) => (
          <div
            key={l.id}
            className="flex flex-col group relative h-[50px] justify-center"
          >
            <Link href={l.link}>
              <p className="text-white mb-5 group-hover:text-amarilloThink text-[1.6rem] lg:text-[2rem] uppercase cursor-pointer transition-all">
                {l.title}
              </p>
            </Link>
            <div
              className={`${
                //esto le pone la clase cuando animacion barrita es verdade
                animacionBarrita ? 'left-0' : 'left-[100%]'
              } w-full md:w-1/2 absolute bottom-0 h-[2px] bg-white group-hover:bg-amarilloThink transition-all duration-700`}
            ></div>
          </div>
        ))}
        <p className="text-white   text-[1.6rem] lg:text-[2rem] uppercase cursor-pointer transition-all">
          Servicios
        </p>
        <div className="flex space-x-4">
          <Link href="/plan/personal">
            <p className="text-white mb-5 hover:text-amarilloThink text-[1.6rem] lg:text-[2rem] uppercase cursor-pointer transition-all">
              Personal |
            </p>
          </Link>
          <Link href="/plan/Event">
            <p className="text-white mb-5 hover:text-amarilloThink text-[1.6rem] lg:text-[2rem] uppercase cursor-pointer transition-all">
              Event |
            </p>
          </Link>
          <Link href="/plan/corporate">
            <p className="text-white mb-5 hover:text-amarilloThink text-[1.6rem] lg:text-[2rem] uppercase cursor-pointer transition-all">
              Corporativo
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewMenu;
