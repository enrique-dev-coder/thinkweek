import React from 'react';
import ServiceCard from './ServiceCard';
const Servicios = () => {
  const ServiceCardData = [
    {
      id: 1,
      frontTitle: 'Personal',
      frontBgImage: "bg-[url('/img/personal.png')]",
      frontTitleColor: 'text-white',
      backBgImage: "bg-[url('/img/personal.png')]",
      backTitle: 'A veces hay que PARAR, para poder seguir,',
      textBackColor: 'text-white',
      backDescription:
        'Precipitarnos debido al ritmo diario, y continuar en lo mismo, nos puede ocasionar problemas mayores de los que intentamos resolver.      ',
    },
    {
      id: 2,
      frontTitle: 'Corporate',
      frontBgImage: "bg-[url('/img/Corporate.png')]",
      frontTitleColor: 'text-amarilloThink',
      backBgImage: "bg-[url('/img/corporateback.png')]",
      backTitle: 'Cogito ergo sum Pienso, luego existo.',
      textBackColor: 'text-black',
      backDescription:
        'Debemos PENSAR, y pensar mejor, y más que nunca, y lo más rápido posible, porque eso marcará la diferencia de excelencia y competitividad de nuestras entidades.',
    },
    {
      id: 3,
      frontTitle: 'Event',
      frontBgImage: "bg-[url('/img/Event.png')]",
      frontTitleColor: 'text-white',
      backBgImage: "bg-[url('/img/eventback.png')]",
      backTitle: 'No te preguntes qué habría pasado si...',
      textBackColor: 'text-white',
      backDescription:
        'En cualquier momento de decisión lo mejor que se puede hacer en primera instancia es lo correcto, lo segundo mejor lo equivocado y lo peor que puedes hacer es nada.',
    },
  ];

  return (
    <div className=" md:first-letter:h-[500px] mb-[70px] mt-[52px] md:mt-0">
      <h2 className="uppercase  text-amarilloThink font-bold mb-[52px] md:mb-0 text-center text-[2.4rem]">
        Servicios
      </h2>
      <div className="w-[70%] hidden  max-w-[1143px] mx-auto md:flex flex-col justify-center">
        <img src="/img/THINK.png" alt="think" className="w-full" />
      </div>
      {/*image for mobile*/}
      <div
        className="absolute z-0 md:hidden"
        style={{ transform: 'translate(15px, 95px)' }}
      >
        <img src="/img/THINKmobile.png" alt="think" />
      </div>
      {/*Service cards container*/}
      <div className="flex relative z-10 flex-col items-center md:flex-row xl:w-[70%]  max-w-[1143px] xl:min-w-[1087px] lg:w-[925px] mx-auto md:mt-[-100px] justify-between ">
        {ServiceCardData.map((s) => (
          <ServiceCard
            key={s.id}
            frontTitle={s.frontTitle}
            frontBgImage={s.frontBgImage}
            frontTitleColor={s.frontTitleColor}
            backBgImage={s.backBgImage}
            backTitle={s.backTitle}
            textBackColor={s.textBackColor}
            backDescription={s.backDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Servicios;
