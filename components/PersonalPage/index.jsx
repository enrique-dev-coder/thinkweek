import React from 'react';
import HeaderPage from '../HeaderPage';
import HeaderPAgeParagraph from '../HeaderPAgeParagraph';
import ChooseSection from './ChooseSection';
import NewFooter from '../NewFooter';
const index = () => {
  return (
    <div>
      <HeaderPage
        src="bg-[url('/img/thinkpersonal.png')]"
        //se envia un componente  que trae titulos y descripciones para los parrafos
        paragraphs={[
          <HeaderPAgeParagraph
            key={1}
            title="¿Qué es?"
            description="Es una experiencia, basada en una metodología, que te ayuda a parar tu ritmo diario, pensar y reflexionar tu presente, para definir como enfocar tu futuro."
          />,
          <HeaderPAgeParagraph
            key={2}
            title="¿PARA QUienes?"
            description="Cualquier persona mayor de edad puede venir a vivir la experiencia Think Week, de 18 a XXX años.Tod@s sois bienvenidos."
          />,
        ]}
      />
      <ChooseSection />
      <NewFooter />
    </div>
  );
};

export default index;
