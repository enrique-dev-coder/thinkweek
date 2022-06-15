import VideoLayout from '../components/VideoLayout';
import { ActuarVideos } from '../data';
import { useState, useEffect } from 'react';
//import LoadingScreen from '../components/LoadingScreen';
//import { motion, AnimatePresence } from 'framer-motion';
import NormalPagecontainer from '../components/Wrappers/NormalPagecontainer';
import NewLoadingScreen from '../components/NewLoadingScreen';

export default function Actuar({ actuarVideos }) {
  const [loading, setLoading] = useState(false);
  //cambiar el estado del laoding
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <>
      {loading ? (
        <NewLoadingScreen />
      ) : (
        <>
          <NormalPagecontainer isVideoPage={true}>
            <VideoLayout
              title="ACTUAR"
              paragraph="A veces hay que ACTUAR, para poder seguir"
              videos={actuarVideos}
              left="/Pensar"
              right="/"
            />
          </NormalPagecontainer>
        </>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const actuarVideos = ActuarVideos;
  return {
    props: { actuarVideos },
  };
};
