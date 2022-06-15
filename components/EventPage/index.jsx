import React from 'react';
import HeaderPage from '../HeaderPage';
import HeaderPAgeParagraph from '../HeaderPAgeParagraph';
import ChooseSection from './ChooseSection';
import NewFooter from '../NewFooter';
const index = () => {
  return (
    <div>
      <HeaderPage
        src="bg-[url('/img/thinkevent.png')]"
        //se envia un componente  que trae titulos y descripciones para los parrafos
        paragraphs={[
          <HeaderPAgeParagraph
            key={1}
            title="¿Qué es?"
            description="Think Event, es un foro de encuentro sectorial, que busca reunir a personas de sectores comunes, con el objetivo de generar conocimiento e innovación, que repercuta en el mundo empresarial."
          />,
          <HeaderPAgeParagraph
            key={2}
            title="¿PARA QUienes?"
            description="Personas de sectores comunes de actividad, que quieran conocer las últimas tendencias y novedades, y generar nuevo conocimiento. "
          />,
        ]}
        //NOTE tAmbien se puden mandar arrays de lementos de HTML como props
        //parrafos={[<p key={1}>hola</p>,<p key={2}>hola</p>]}
      />
      <ChooseSection />
      <NewFooter isCorporatePage={false} />
    </div>
  );
};

export default index;
