import React from 'react';
import ChooseCard from '../ChooseCard';

const ChooseSection = () => {
  const chooseCardData = [
    {
      title: 'Think Event',
      desc: 'Tenéis un problema o queréis un proceso de transformación/cambio en vuestra entidad? Este es el formato perfecto para iniciar ese proceso. ',
      color: '#515151 ',
      features: [
        'Emplazamiento exclusivo.',
        'Exclusividad de grupos de debate reducidos.',
        'Desayuno y comida incluida.',
        'Dinámica de trabajo Think Event.',
      ],
      cardtext: 'Consulta fechas Disponibles',
      link: 'https://thinkweek-21108231.hubspotpagebuilder.com/think-personal-sentir-0',
    },
  ];

  return (
    <div className="max-w-[1143px] relative  xl:w-[70%] xl:min-w-[1008px] lg:w-[925px] mx-auto  ">
      <div className="absolute hidden lg:block  leftEventImg bottom-[5%]">
        <img src="/img/eventimage.png" className="w-[900px] h-[440px]" />
      </div>
      <h1 className=" text-center text-[2.3rem] my-[35px] lg:mb-[35px] font-medium text-grisOscuroThink">
        Elige tu Plan
      </h1>
      <div className="flex   justify-end flex-col mb-20 lg:flex-row items-center">
        {chooseCardData.map((c) => (
          <ChooseCard
            key={c.title}
            title={c.title}
            desc={c.desc}
            color={c.color}
            features={c.features}
            cardtext={c.cardtext}
            link={c.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseSection;
