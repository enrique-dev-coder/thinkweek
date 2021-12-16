import styles from "../styles/menumobileindex.module.scss"
import Link from "next/link"
//prevenir scroll
import useLockBodyScroll from '../helpers/use-lock-body-scroll'

export default function MenuMobile({botonesCerrar,background,menuTextColor}) {
  useLockBodyScroll()
  return (
    <div className={styles.mobile_container} style={{backgroundColor:`${background}`}}>
      <Link href="/Parar">
        <a>
          <p onClick={botonesCerrar} style={{color:`${menuTextColor}`}}>Parar</p>
        </a>
      </Link>
      <Link href="/Pensar" passHref>
        <a>
          <p onClick={botonesCerrar} style={{color:`${menuTextColor}`}}>Pensar</p>
        </a>
      </Link>
      <Link href="/Actuar">
        <a>
          <p  onClick={botonesCerrar} style={{color:`${menuTextColor}`}}>Actuar</p>
        </a>
      </Link>
      <Link href="/Thinkweek">
       <a>
          <p  onClick={botonesCerrar}style={{color:`${menuTextColor}`}}>Thinkweek</p>
       </a>
      </Link>
        <p onClick={botonesCerrar}style={{color:`${menuTextColor}`}}>Contacto</p>
    </div>
  )
}