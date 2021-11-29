import {useState} from 'react'
import styles from "../styles/videoModal.module.scss"
import useLockBodyScroll from '../helpers/use-lock-body-scroll'

export default function VideoModal({titulo,lugar,descripcion,display,src,mostrarVideo,cerrarVideo}) {
  useLockBodyScroll()
  const [text,setText] = useState("none")
  
  const handleClick=()=>{
    if(text === "none"){
      setText("block")
    }else{
      setText("none")
    }
  }
  return (
    //cuando modal de video sea falso el style sea 0 y 0 
    //conditional stilyng 
    //boton  de la flechita  para que cuando se le de click el  mostrarVideo sea falso
    //
    <div 
      className={styles.superContainer}
      style={ mostrarVideo ?  {opacity:"1",zIndex:"2"} : {opacity:"0",zIndex:"0"}}
    >
        <section  className={styles.container}>
      <video 
      src={src}
      autoPlay
      loop
      muted
      className={styles.videomodal}
      >
      </video>
      <div className={styles.videomodal_title}>
        <h2 className={text==="none" ? styles.appear : styles.disappear }>{titulo}</h2>
          
        <h3 className={text==="none" ? styles.appear : styles.disappear }>{lugar}</h3>
    
        {
          text === "none" ? 
          (<p className={styles.leermas}  onClick={()=>handleClick()} >+ Leer más</p>):
          (<p className={styles.leermas}  onClick={()=>handleClick()} >- Leer menos</p>)
        }
        <p className={styles.desc} style ={{display: `${text}`}}>{descripcion}</p>
      </div>
      {/* ese boton cierra el video */}
      <button 
        onClick={cerrarVideo}
        className={styles.btn}
      >
        <img 
          src="/img/leftArrow.png" 
          alt="regresar a la pagina principal" 
        />
      </button>  
    </section>
    </div>
  
  )
}
