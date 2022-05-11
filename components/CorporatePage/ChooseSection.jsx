import React from 'react';
import ChooseCard from '../ChooseCard';

const ChooseSection = () => {
  const chooseCardData = [
    {
      title: 'Day',
      desc: 'AIdeal para jornadas rápidas y más ejecutivas, con el objetivo de tomar decisiones, sobre asuntos o problemas ya definidos.',
      color: '#C4C4C4',
      features: [
        'Emplazamiento exclusivo.',
        'Desayuno y comida incluida.',
        'Dinámica de trabajo Think Day (de dónde vengo a dónde voy).',
      ],
    },
    {
      title: 'Weekend',
      desc: 'Tenéis un problema o queréis un proceso de transformación/cambio en vuestra entidad? Este es el formato perfecto para iniciar ese proceso. ',
      color: '#515151 ',
      features: [
        'Emplazamiento exclusivo.',
        'Alojamiento (2 noches) en régimen todo incluido (alimentación equilibrada y sostenible).',
        'Dinámica de trabajo Think Weekend (Biografía de empresa, Método de análisis Think Weekend, Plan de acción).',
        'Talleres de esparcimiento (sujetos al emplazamiento escogido).',
      ],
    },
    {
      title: 'Week ',
      desc: 'Sin proceso no hay resultados. Think Week os ayuda a definir la estrategia y el plan de acción, que han de acompañar a vuestra entidad en un mundo tan cambiante como el actual.',
      color: '#FFDD00',
      features: [
        'Emplazamiento exclusivo.',
        'Alojamiento (6 noches) en régimen todo incluido (alimentación equilibrada y sostenible).',
        'Dinámica de trabajo Think Week (Paro, pienso y actúo). Biografía de empresa, Método de análisis Think Weekend, Plan de acción',
        ' Talleres de esparcimiento (sujetos al emplazamiento escogido).',
      ],
    },
  ];

  return (
    <div className="max-w-[1143px]  xl:w-[70%] xl:min-w-[1008px] lg:w-[925px] mx-auto  ">
      <h1 className=" text-center text-[2.3rem] my-[35px] lg:mb-[70px] font-medium text-grisOscuroThink">
        Elige tu Plan
      </h1>
      <div className="flex   justify-between flex-col lg:flex-row items-center">
        {chooseCardData.map((c) => (
          <ChooseCard
            key={c.title}
            title={c.title}
            desc={c.desc}
            color={c.color}
            features={c.features}
            isCorporatePage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseSection;
