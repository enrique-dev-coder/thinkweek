import React from 'react';
import Link from 'next/link';
//import Link from 'next/link';
const ServiceCard = ({
  key,
  frontTitle,
  frontBgImage,
  frontTitleColor,
  backBgImage,
  textBackColor,
  backTitle,
  backDescription,
  link,
  link2,
}) => {
  return (
    <div className="flex flex-col  mb-20 md:mb-0" key={key}>
      {/*contenedor padre de la card donde lleva la perspectiva*/}
      <Link href={link2}>
        <div
          className="w-[285px] h-[285px] cursor-pointer  flip  rounded-full "

          //style={{ boxShadow: '0px 10px 50px rgba(16, 51, 30, 0.5);' }}
        >
          {/*contenedor del front y back donde se da 100% a altura y ancho y la transition y transform style*/}
          {/*se agrega en Css una funcion de hover para rotar en el eje Y 180grados*/}
          <div className="flip-content">
            {/*contenedor de front*/}
            <div
              className={`${frontBgImage} flip-front  bg-cover bg-center flex flex-col justify-center`}
            >
              <h3
                className={`${frontTitleColor} text-center text-[3.2rem] uppercase font-semibold mt-5`}
              >
                {frontTitle}
              </h3>
            </div>
            {/*contenedor de back*/}
            <div
              className={`${backBgImage} ${textBackColor} flip-back bg-cover bg-center flex flex-col justify-center items-center`}
            >
              <div className="w-[200px] h-[200px]">
                <p
                  className={`text-center text-[2rem] uppercase font-semibold mt-5`}
                >
                  {backTitle}
                </p>
                <p className="text-[1.2rem] text-center">{backDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <button className="text-[1.6rem] border  w-[30%] mx-auto mt-10 font-medium  bg-amarilloThink text-white  border-amarilloThink  rounded-md">
          Ver Más
        </button>
      </a>
    </div>
  );
};

export default ServiceCard;
