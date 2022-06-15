import { PensarVideos } from '../data';
import VideoLayout from '../components/VideoLayout';
import { useState, useEffect } from 'react';
//import LoadingScreen from '../components/LoadingScreen';0
//import { motion, AnimatePresence } from 'framer-motion';
import NormalPagecontainer from '../components/Wrappers/NormalPagecontainer';
import NewLoadingScreen from '../components/NewLoadingScreen';

export default function Pensar({ pensarVideos }) {
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
              title="PENSAR"
              paragraph="A veces hay que PENSAR, para poder seguir"
              videos={pensarVideos}
              left="/"
              right="/Actuar"
            />
          </NormalPagecontainer>
        </>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const pensarVideos = PensarVideos;
  return {
    props: { pensarVideos },
  };
};
