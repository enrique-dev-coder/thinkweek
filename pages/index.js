import NavBarIndex from "../components/NavBarIndex"
import styles from "../styles/Homepage.module.scss"
import {useEffect,useState,useRef} from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
export default function Home() {
  const [vantaEffect,setVantaEffect] = useState(0);
  const vantaRef = useRef(null)
  //el use Effct va acorrer cuando haya un cambio en vanta effect
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
      <canvas className = {styles.container_bg_1}>

      </canvas>

      <div className={styles.container_bg_2} ref={vantaRef} >

      </div>

      <div id="vantajs">
      </div>
       
    </main>
    </>
  )
}
