import styles from "../styles/NavbarIndex.module.scss"
import Link from "next/link"
import { useState } from "react"
import MenuMobileIndex from "./MenuMobileIndex"

export default function NavBarIndex({showElementsOnMobile,color,img}) {
  console.log(color)
  const [mobileMenu,setMobileMenu]= useState(false)

  const showMobileMenu=()=>{
    mobileMenu != true ? setMobileMenu(true) : setMobileMenu(false)
  }
  //ShowElementsOnMobile es una funcion que se trae desde la pagina de index como propiedad
  return (
    <header className={styles.container}  >
      <nav className={styles.nav_container}>
        <Link href="/" passHref>
          <img
          src={img}
          width="150px"
          height="50px"
          style={{marginLeft:"24px",cursor:"pointer "}}
          />
        </Link>
        <ul className= {styles.nav_container_ul}>
          <Link href="/Parar">
            <a>
              <li style={{color:`${color}`}}>
                Parar
              </li>
            </a>
          </Link>
          <Link href="/Pensar">
            <a>
              <li style={{color:`${color}`}}>
                Pensar
              </li>
            </a>
          </Link>
          <Link href="/Actuar">
            <a>
              <li style={{color:`${color}`}}>
                Actuar
              </li>
            </a>
          </Link>
          <Link href="/Thinkweek">
            <a>
              <li style={{color:`${color}`}}>
                Think Week
              </li>
            </a>
          </Link> 
          <Link href="/Contacto">
            <a>
              <li className={styles.contact_button} style={{color:`${color}`,border:`2px solid ${color}`}}>
              Contáctanos
              </li>
            </a>
          </Link>
        </ul>
        <div 
          className={styles.hamburguer} 
          onClick={
            ()=>{
             showMobileMenu()
             showElementsOnMobile()
            }}
          >
          <div className={styles.hamburguer_line}></div>
          <div className={styles.hamburguer_line}></div>
          <div className={styles.hamburguer_line}></div>
        </div>  
        {
          mobileMenu && (
            <MenuMobileIndex
              botonesCerrar={()=>setMobileMenu(false)}

            />
          )
        }
      </nav>
    </header>
  )
}
