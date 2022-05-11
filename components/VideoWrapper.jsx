import React from 'react';

const VideoWrapper = ({ children }) => {
  //contenedor con un video de fondo que sirve  mediante un contendeor con el video en amximo de fonod
  //para que sirva se modifico la clase de video{widht:100%} por default de tailwind
  //se le da mas z-index al contenedor del main para que este arriba del video y que ocupe todo el ancho y alto
  return (
    <div className="relative">
      <video
        src="https://res.cloudinary.com/dof2dcqoe/video/upload/v1650908650/thinkweek/PORTADA_2_ryzoik.mp4"
        loop
        muted
        autoPlay
        id="myVideo"
      />
      <main className=" w-full h-screen z-10 fixed custom-cursor">
        {children}
      </main>
    </div>
  );
};

export default VideoWrapper;
