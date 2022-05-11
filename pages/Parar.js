import VideoLayout from '../components/VideoLayout';
import { PararVideos } from '../data';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';
import NormalPagecontainer from '../components/Wrappers/NormalPagecontainer';
export default function Home({ videos }) {
  const [loading, setLoading] = useState(false);

  //cambiar el estado del laoding
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <LoadingScreen />
        </motion.div>
      ) : (
        <>
          <NormalPagecontainer isVideoPage={true}>
            <VideoLayout
              key={videos.id}
              title="PARAR"
              paragraph="A veces hay que PARAR, para poder seguir"
              videos={videos}
              left="/Actuar"
              right="/Pensar"
            />
          </NormalPagecontainer>
        </>
      )}
    </AnimatePresence>
  );
}

export const getStaticProps = async () => {
  const videos = PararVideos;

  return {
    props: { videos },
  };
};

//intentar poner global el estado de loading
//para que se carge mientras se renderizen los videos??
