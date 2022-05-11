import React from 'react';
import Transparent from './DownloadPdfButton';
import SolidButton from './SolidButton';
const HeaderPage = ({ src, paragraphs }) => {
  return (
    <div className="w-full h-auto md:h-[70vh] flex flex-col mt-[52px] md:mt-0 items-center justify-center">
      <div className="xl:w-[70%] w-4/5 h-auto md:h-[430px]  lg:w-[925px] xl:min-w-[1008px] max-w-[1143px]  shadow-2xl mx-auto rounded-3xl  border border-yellow-400 flex flex-col md:flex-row overflow-hidden">
        {/*image container*/}
        <div
          className={`w-full lg:basis-1/2 h-[230px] md:h-full ${src} bg-cover bg-center  `}
        ></div>
        {/*text container*/}
        <div
          className="basis-1/2 h-full py-10 md:py-0 border-l-2 border-l-yellow-400"
          style={{ backgroundColor: '#1F1F1F' }}
        >
          <div className="h-[90%] flex flex-col justify-evenly ">
            {paragraphs.map((p) => p)}
          </div>
          <div className="w-10/12 mx-auto py-8 md:py-0 ">
            <div className="w-[122px] h-[8px] rounded-full bg-amarilloThink"></div>
          </div>
        </div>
      </div>
      {/*button container*/}
      <div className="w-[70%] mx-auto flex justify-end max-w-[1143px] mt-16">
        <Transparent title="Descargar PDF" />
        <SolidButton title="Contáctanos" />
      </div>
    </div>
  );
};

export default HeaderPage;
