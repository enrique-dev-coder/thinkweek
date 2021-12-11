import styles from "../styles/menumobileindex.module.scss"
import Link from "next/link"
import useLockBodyScroll from '../helpers/use-lock-body-scroll'

export default function MenuMobile({botonesCerrar}) {
  useLockBodyScroll()
  return (
    <div className={styles.mobile_container}>
      <Link href="/Parar">
        <a>
          <p onClick={botonesCerrar}>Parar</p>
        </a>
      </Link>
      <Link href="/Pensar" passHref>
        <a>
          <p onClick={botonesCerrar}>Pensar</p>
        </a>
      </Link>
      <Link href="/Actuar">
        <a>
          <p  onClick={botonesCerrar}>Actuar</p>
        </a>
      </Link>
      <Link href="/Thinkweek">
       <a>
          <p  onClick={botonesCerrar}>Thinkweek</p>
       </a>
      </Link>
        <p>Contacto</p>
    </div>
  )
}