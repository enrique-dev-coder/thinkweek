import React from 'react';
import VideoWrapper from '../components/VideoWrapper';
import HomePage from '../components/HomePage';
export default function Home() {
  return (
    //aqui recibe el children que va arriba del video, ese contenedor esta en el HomePage
    <VideoWrapper>
      <HomePage />
    </VideoWrapper>
  );
}
