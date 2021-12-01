import NavBarIndex from "../components/NavBarIndex";
import styles from "../styles/Homepage.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {useEffect,useState,useRef} from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import React from 'react';
import Canvas from "../components/Canvas";
import * as THREE from "three";


export default function Home() {
  const [vantaEffect,setVantaEffect] = useState(0);
  const vantaRef = useRef(null)
  //popup de texto copiado
  const [showCopyModal,setShowCopyModal]=useState(false)
  const [showCode,setShowCode] = useState(false)
 const  [showElementsOnMobile,setShowElementsOnMobile]= useState(true)
  /*
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  */
  
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
      
          {
            showCode && 
            <div  className={styles.copy_section} style={showElementsOnMobile ? {opacity:"1"} : {opacity:"0"}}>
              <p>¡Haz encontrado un código promocional!</p>
                <CopyToClipboard text="TWEXPERIENCE10">
                    <p 
                      style={{cursor:"pointer"}}
                      onClick={()=>setShowCopyModal(true)}
                    ><b>TWEXPERIENCE10</b></p>
                </CopyToClipboard>
                    <p><b>Contáctanos</b> y recibirás un 10% en tu experiencia.</p>
                {
                  showCopyModal &&
                  <div className={styles.copy_section_modal}>
                    <p>¡CÓDIGO COPIADO!</p>
                    <p className={styles.copy_section_modal_2nd}>Guardalo para cuando nos contacts</p>
                    <p><b>Contactar ya</b></p>
                  </div>
                }
            </div>
          }
          <div className={styles.container_texto} style={showElementsOnMobile ? {opacity:"1"} : {opacity:"0"}}>
            <img
              src="/img/borrarIcon.png"
              width="64px"
              height="64px"
            />
            <p>(Borra la ciudad y encontrás una sorpresa)</p>
            <p>Ayudamos a <b>personas, empresas y entidades,</b> a parar, pensar, y encontrar ideas que generen innovación.</p>
          </div>
        <div className = {styles.container_bg_1}>
        </div>
        <div className={styles.container_bg_2} ref={vantaRef} >
        </div>

      <div id="vantajs">
      </div>
        <div 
          onMouseMove={()=>setTimeout(function(){ 
            setShowCode(true); 
          },3000)}
          onTouchMove={()=>setTimeout(function(){ 
            setShowCode(true); 
          },3000)}
          style={showCode ? {display:"none"}: {display:"block"}}
          className={styles.canvas_container}
        >
        <Canvas >
        </Canvas>
      </div>
    </main>


    
 
    </>
  )
}
