import NavBarIndex from "../components/NavBarIndex";
import styles from "../styles/Homepage.module.scss";
import {useEffect,useState,useRef} from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import React from 'react';
import * as THREE from "three";
import AudioButton from "../components/VolumeButton";
import ModalButton from "../components/ModalVolumeButton";
export default function Home() {
  const [vantaEffect,setVantaEffect] = useState(0);
  const vantaRef = useRef(null)
  //popup de texto copiado
 const  [showElementsOnMobile,setShowElementsOnMobile]= useState(true)
 const  [modal,setModal] = useState(true)
  useEffect(()=>{

    if(!vantaEffect){
      setVantaEffect(
        CLOUDS({
          el:vantaRef.current,
          THREE,
          skyColor: 0xd7d7d7,
          cloudColor: 0xe3dcd2,
          cloudShadowColor: 0x372517
        })
      )
    }
    return()=>{
      if (vantaEffect) vantaEffect.destroy()
    }
    
  },[vantaEffect])
  
  
  return (
      <>
        <main className={styles.container}>
          <NavBarIndex
            showElementsOnMobile= {()=> showElementsOnMobile !=true ? setShowElementsOnMobile(true) : setShowElementsOnMobile(false)}
            img="/img/logoWhite.png"
          />
              <div className={styles.controller_container}>
                <AudioButton color="white"/>
              </div>
              <div className={styles.controller_container_mobile}>
                <AudioButton color="dark"/>
              </div>
              <div className={styles.think}>
                <h1>THINK</h1>
              </div>
              <div className={styles.week}>
                <h1>WEEK</h1>
              </div>
              <div className={styles.container_texto} style={showElementsOnMobile ? {opacity:"1"} : {opacity:"0"}}>
                <p>Ayudamos a <b>personas, empresas y entidades,</b> a parar, pensar, y encontrar ideas que generen innovación.</p>
              </div>
          
        </main>
        {
          modal &&
            <div className={styles.modal_container} onClick={()=>setModal(false)}>
              <div className={styles.modal_content}>
                <ModalButton/>
                  <h2>
                    ¡Bienvenido a <span style={{color:"#F4C900"}}>Thinkweek</span>!
                  </h2>
                  <p>Para disfrutar una <b>mejor experiencia</b>  activa la música</p>
              <div className={styles.closeModal}>
                <img src="/img/closeButton.png" width="100%"/>
              </div>
              </div>
            </div>
        }
        <div className={styles.container_bg_2} ref={vantaRef} >
              <div id="vantajs"></div>
        </div>
      </>
  )
}