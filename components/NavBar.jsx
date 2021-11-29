import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import { useState } from "react"
import MenuMobile from "./MenuMobile"

export default function NavBar() {
  const [mobileMenu,setMobileMenu]= useState(false)

  const showMobileMenu=()=>{
    mobileMenu != true ? setMobileMenu(true) : setMobileMenu(false)
  }

  return (
    <header className={styles.container}  >
      <nav className={styles.nav_container}>
        <Link href="/" passHref>
          <img
          src="/img/logo.png"
          width="150px"
          height="50px"
          style={{marginLeft:"24px",cursor:"pointer "}}
          />
        </Link>
        <ul className= {styles.nav_container_ul}>
          <Link href="/Parar">
            <a>
              <li>
                Parar
              </li>
            </a>
          </Link>
          <Link href="/Pensar">
            <a>
              <li>
                Pensar
              </li>
            </a>
          </Link>
          <Link href="/Actuar">
            <a>
              <li>
                Actuar
              </li>
            </a>
          </Link>
          <Link href="/thinkweek">
            <a>
              <li>
                Think Week
              </li>
            </a>
          </Link>
        </ul>
        <div className={styles.hamburguer} onClick={()=>showMobileMenu()}>
          <div className={styles.hamburguer_line}></div>
          <div className={styles.hamburguer_line}></div>
          <div className={styles.hamburguer_line}></div>
        </div>  
        {
          mobileMenu && (
            <MenuMobile
              botonesCerrar={()=>setMobileMenu(false)}

            />
          )
        }
      </nav>
    </header>
  )
}
