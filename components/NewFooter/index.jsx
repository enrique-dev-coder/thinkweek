import React from 'react';
import ContactBar from './ContactBar';
import NameContactForm from '../NameContactForm';
const NewFooter = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-end  h-[850px]">
      {/*el contendor tiene una iamgen de fondo que es una ondita de amarillo y blanco y le pongo un color de fonod para que no se vean esas lineas blancas molestas*/}
      <div className="w-full flex-1 flex-col md:flex-row bg-[url('/img/footermobile.png')] md:bg-[url('/img/backfooter.png')] bg-cover flex  bg-amarilloThink ">
        <div className="basis-1/2">
          <NameContactForm />
        </div>
        <div className="basis-1/2 flex justify-center">
          <video
            src="https://file-ext.s3.amazonaws.com/video_ojo_version_final.mp4"
            muted
            loop
            className="w-[170px] h-[170px] ml-[70px] md:ml-0 md:w-[400px] md:h-[400px] rounded-full"
            style={{ boxShadow: '0px 4px 50px rgba(120, 143, 156, 0.80);' }}
            autoPlay
          />
        </div>
      </div>
      {/*contact info*/}
      <ContactBar />
    </div>
  );
};

export default NewFooter;
