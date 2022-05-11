import React from 'react';
import TransparentButton from '../DownloadPdfButton';
import SolidButton from '../SolidButton';
import TeamCard from './TeamCard';

const Team = () => {
  const cardData = [
    {
      id: 1,
      img: '/img/team/raquel.png',
      name: 'Raquel Morano',
      job: 'CEO Think Week',
      desc: (
        <p>
          Transformo entidades a través de la migración digital, orientándoles
          en el cambio de procesos de trabajo y organizando sus equipos, así
          como la integración eficaz de tecnología necesaria para ello.
        </p>
      ),
    },
    {
      id: 2,
      img: '/img/team/belen.png',
      name: 'Belén Oller ',
      job: 'Directora de Comunicación',
      desc: (
        <p>
          Mi camino profesional en márketing, comunicación y publicidad empezó
          hace más de 20 años. Dirijo una agencia internacional de marketing y
          comunicación con un concepto innovador y creativo.{' '}
        </p>
      ),
    },
    {
      id: 3,
      img: '/img/team/eduardo.png',
      name: 'Eduardo Infante',
      job: 'Creador del método',
      desc: (
        <p>
          Escritor del bestseller internacional Filosofía en la calle y No me
          tapes el sol: cómo se un cínico de los buenos. Colaborador habitual en
          medios de comunicación que nos invita a transformarnos.
        </p>
      ),
    },
    {
      id: 4,
      img: '/img/team/Noas.png',
      name: 'Noa Mora',
      job: 'Creadora Audivisual ',
      desc: (
        <p>
          Me dedico a la creación audiovisual de contenido, hace 8 años. Mi
          máxima motivación es despertar un sentimiento en el espectador, porque
          para creer no hay que ver, hay que sentir.
        </p>
      ),
    },
    {
      id: 5,
      img: '/img/team/Beatriz.png',
      name: 'Beatriz Herrera',
      job: 'Decoradora de Interiores',
      desc: (
        <p>
          Amante de la belleza y armonía en todas sus formas, pero especializada
          en aplicarlas en la buena mesa y su ambiente ideal. Asesora hostelera
          y experta en eventos empresariales.
        </p>
      ),
    },
  ];
  return (
    <>
      <div className=" h-[170px] xl:w-[70%] max-w-[1143px] xl:min-w-[1157px] lg:w-[970px] flex flex-col justify-center  lg:border-x-2 lg:border-t-2 lg:border-amarilloThink mx-auto rounded-t-3xl">
        <h2 className="font-bold uppercase text-amarilloThink text-[1.8rem] lg:text-[2.4rem]  mb-10 text-center">
          ¡Tenemos un equipo increíble!
        </h2>
        <p className="text-center text-[1.4rem] lg:text-[1.6rem] w-4/5 mx-auto">
          Somos un equipo multidisciplinar, que ama los procesos de
          transformación. Hemos dedicado nuestra vida y estudios a motivar
          procesos de transformación en personas y empresas.
        </p>
      </div>
      {/*cards de el equipo*/}
      <div className="overflow-x-scroll md:overflow-hidden">
        <div className="xl:w-[70%] w-[1200px]  max-w-[1143px] mx-auto xl:min-w-[1157px] mb-[50px] flex lg:w-[970px]">
          {cardData.map((c) => (
            <TeamCard
              key={c.id}
              img={c.img}
              name={c.name}
              job={c.job}
              desc={c.desc}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-[70px]">
        <TransparentButton title="Ver video" />
        <SolidButton title="Contáctanos" />
      </div>
    </>
  );
};

export default Team;
