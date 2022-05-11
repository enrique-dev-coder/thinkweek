import React from 'react';
import ChooseCard from '../ChooseCard';

const ChooseSection = () => {
  const chooseCardData = [
    {
      title: 'Day',
      desc: 'Aunque sólo sea un día... desconecta de tu rutina.',
      color: '#C4C4C4',
      features: [
        'Emplazamiento exclusivo.',
        'Desayuno y comida incluida.',
        'Dinámica de trabajo Think Day (de dónde vengo a dónde voy).',
      ],
    },
    {
      title: 'Weekend',
      desc: 'Vive una experiencia de fin de semana transformadora... ',
      color: '#515151 ',
      features: [
        'Emplazamiento exclusivo.',
        'Alojamiento (2 noches) en régimen todo incluido (alimentación equilibrada y sostenible).',
        'Dinámica de trabajo Think Weekend (Paro, pienso y actúo) ',
      ],
    },
    {
      title: 'Week ',
      desc: 'Lo único que puedes estar seguro de cambiar,es a tí mismo. Comienza...',
      color: '#FFDD00',
      features: [
        'Emplazamiento exclusivo.',
        'Alojamiento (6 noches) en régimen todo incluido (alimentación equilibrada y sostenible).',
        'Dinámica de trabajo Think Week (Paro, pienso y actúo)',
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
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseSection;
