import React from 'react';
import HeaderPage from '../HeaderPage';
import HeaderPAgeParagraph from '../HeaderPAgeParagraph';
import ChooseSection from './ChooseSection';
import NewFooter from '../NewFooter';
const index = () => {
  return (
    <div>
      <HeaderPage
        src="bg-[url('/img/thinkcorporate.png')]"
        //se envia un componente  que trae titulos y descripciones para los parrafos
        paragraphs={[
          <HeaderPAgeParagraph
            key={1}
            title="¿Qué es?"
            description="Es una experiencia, enfocada para la entidades y empresas, basada en una metodología, que ayuda a tu equipo de trabajo a transformar la entidades, sus procesos, para generar nuevas ideas y cambios que impacten en la cuenta de resultados."
          />,
          <HeaderPAgeParagraph
            key={2}
            title="¿PARA QUienes?"
            description="Cualquier entidad de cualquier sector y tamaño, puede hacer Think Week.Se recomienda pequeños grupos de trabajo de hasta 12/15 personas."
          />,
        ]}
      />
      <ChooseSection />
      <NewFooter />
    </div>
  );
};

export default index;
