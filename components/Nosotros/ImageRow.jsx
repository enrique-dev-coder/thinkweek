import React from 'react';
import TransparentButton from '../DownloadPdfButton';

const ImageRow = () => {
  return (
    <div className="mb-[70px]">
      <h2 className="font-bold uppercase text-amarilloThink text-[1.9rem] lg:text-[2.4rem] mb-[50px] text-center">
        Vive una experiencia transformadora
      </h2>
      <div className="w-full max-w-[1440px] mb-[25px] overflow-hidden mx-auto h-[416px] flex items-center  border-y-2 border-y-amarilloThink">
        <div className="flex">
          <img src="/img/row1.png" alt="experiencia thinkweek" />
          <img src="/img/row2.png" alt="experiencia thinkweek" />
          <img src="/img/row3.png" alt="experiencia thinkweek" />
        </div>
      </div>
      <div className="flex justify-center">
        <TransparentButton title="Descargar PDF" />
      </div>
    </div>
  );
};

export default ImageRow;
