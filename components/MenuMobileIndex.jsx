import styles from "../styles/menumobileindex.module.scss"
import Link from "next/link"
import useLockBodyScroll from '../helpers/use-lock-body-scroll'

export default function MenuMobile({botonesCerrar}) {
  useLockBodyScroll()
  return (
    <div className={styles.mobile_container}>
      <Link href="/">
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
        <p>Think week</p>
        <p>Contacto</p>
    </div>
  )
}