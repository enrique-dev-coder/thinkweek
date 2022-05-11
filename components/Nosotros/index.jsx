import React from 'react';
import HeaderPage from '../HeaderPage';
import HeaderPAgeParagraph from '../HeaderPAgeParagraph';
import NewFooter from '../NewFooter';
import ImageRow from './ImageRow';
import Servicios from './Servicios';
import Team from './Team';

const index = () => {
  return (
    <div>
      <HeaderPage
        src="bg-[url('/img/nosotros.png')]"
        //se envia un componente  que trae titulos y descripciones para los parrafos
        paragraphs={[
          <HeaderPAgeParagraph
            key={1}
            title="¿Quiénes somos?"
            description="Somos una entidad que ofrecemos experiencias con un método exclusivo, para ayudar a las personas y entidades, a parar de su ritmo diario, para poder atravesar procesos de cambio y transformación, enfocados en un plan de acción futuro."
          />,
          <HeaderPAgeParagraph
            key={2}
            title="¿PARA QUE?"
            description="Para promover procesos de cambio en las personas, y de innovación en las entidades, parando la rutina diaria, a través del pensamiento y la reflexión, en la búsqueda de la generación de ideas y acciones, que ayuden al bienestar de las personas, y al éxito de las entidades.            "
          />,
        ]}
      />
      <Servicios />
      <ImageRow />
      <Team />
      <NewFooter />
    </div>
  );
};

export default index;
