import styles from '../styles/videos.module.scss';
import VideoModal from './VideoModal';

import { useState } from 'react';

export default function VideoLayout({
  videos,
  title,
  paragraph,
  left,
  right,
  titulo,
  lugar,
  descripcion,
}) {
  // console.log(videos)
  const [videoData, setVideoData] = useState({});
  //activar modal de video
  //como se activaria el modal de video?
  const [modalVideo, setModalVideo] = useState(false);

  const appearVideo = (id) => {
    //me retorna el array del numero igual al id que le llega como parametro
    const singleVideo = videos.findIndex((obj) => obj.id === id);
    //me selecciona el array al que yo le de click
    //estas pasando el objeto al estado para poder acceder a la data cambiante
    setVideoData(videos[singleVideo]);
    //cambiar el modal video a true
    //cuando le piques a la tachita de cerrar esto se cambia a falso
    setModalVideo(true);
  };
  //funcion para hacer el video a falso
  const cerrarVideo = () => {
    setModalVideo(false);
    //vaciar estado al cerrar el video
    setVideoData({});
  };
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.title_container}>
          {/** aqui va el video contenedor */}
          <div className={styles.text_container}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </div>

          <video
            className={styles.videoTitleBackground}
            autoPlay
            muted
            loop
            src="https://res.cloudinary.com/dof2dcqoe/video/upload/v1639099810/thinkweek/VIDEO_PARA_LOS_3_qxynwy.mp4"
          ></video>
        </div>
        {videos.map((v, i) => (
          <div key={i} className={styles.card}>
            <video
              key={v.id}
              src={v.video}
              autoPlay
              muted
              loop
              className={styles.videoCard}
              /**el onClick debe traer el estado  */
              onClick={() => {
                appearVideo(v.id);
              }}
            />
          </div>
        ))}
      </div>
      {/**aqui es donde le tiene que caer la propiedad  de el estado actual
       * el mostrar video es la propiedad dinamica que cambiara cuando le demos click
       * el cerrar video se pasa como una funcion que  pasa a otro componente como propiedad
       * esa funcion se activa cuando se le da click a un componente que esta en el videoModal
       * en este caso es util pasar una funcion como propiedad para maniopular el estado en otro componente
       */}
      {modalVideo && (
        <VideoModal
          src={videoData.video}
          titulo={videoData.titulo}
          lugar={videoData.lugar}
          descripcion={videoData.descripcion}
          mostrarVideo={modalVideo}
          cerrarVideo={() => cerrarVideo()}
        />
      )}
    </div>
  );
}
