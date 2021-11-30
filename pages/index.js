import NavBarIndex from "../components/NavBarIndex";
import styles from "../styles/Homepage.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {useEffect,useState,useRef} from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
export default function Home() {
  const [vantaEffect,setVantaEffect] = useState(0);
  const vantaRef = useRef(null)
  //popup de texto copiado
  const [showCopyModal,setShowCopyModal]=useState(false)
 
 
  //useRef del canvas
  const canvasRef = useRef(null)
  /*
  useEffect(()=>{
    const canvas = canvasRef.current
    //canvas context
     const context = canvas.getContext("2d")
     //el use Effct va acorrer cuando haya un cambio en vanta effect
    const brushRadius = (canvas.width / 100) * 3
    const img = new Image();
    img.onload = function(){  
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    img.loc = "/img/"

    img.filename = 'borrablebg.png';
    img.style.zIndex=5;
    if (window.devicePixelRatio >= 2) {
      var nameParts = img.filename.split('.');
      img.src = img.loc + nameParts[0]+"."+nameParts[1];
    } else {
      img.src = img.loc + img.filename;
    }
    // detectar boton izquiero 
    function detectLeftButton(event) {
      if ('buttons' in event) {
          return event.buttons === 1;
      } else if ('which' in event) {
          return event.which === 1;
      } else {
          return event.button === 1;
      }
    }  
    //posicion del pincel
    function getBrushPos(xRef, yRef) {
      var canvasRect = canvas.getBoundingClientRect();
        return {
        x: Math.floor((xRef-canvasRect.left)/(canvasRect.right-canvasRect.left)*canvas.width),
        y: Math.floor((yRef-canvasRect.top)/(canvasRect.bottom-canvasRect.top)*canvas.height)
        };
    }
    function drawDot(mouseX,mouseY){
        context.beginPath();
        context.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
        context.fillStyle = '#000';
        context.globalCompositeOperation = "destination-out";
        context.fill();
    }

    canvas.addEventListener("mousemove", function(e) {
      var brushPos = getBrushPos(e.clientX, e.clientY);
      var leftBut = detectLeftButton(e);
      if (leftBut == 1) {
        drawDot(brushPos.x, brushPos.y);
      }
    }, false);
        
    canvas.addEventListener("touchmove", function(e) {
      e.preventDefault();
      var touch = e.targetTouches[0];
      if (touch) {
      var brushPos = getBrushPos(touch.pageX, touch.pageY);
          drawDot(brushPos.x, brushPos.y);
      }
    }, false);
  },[])
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
      <NavBarIndex/>
      {/**
      <canvas className = {styles.container_bg_1} ref={canvasRef}>
      </canvas>
       * el CopyToclipboard solo puede tener un elemento
       */}
      <div className={styles.copy_section}>
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

          <div className={styles.container_texto}>
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
       
    </main>
    </>
  )
}
