import React from 'react'
import NavBarIndex from '../components/NavBarIndex'
import styles from "../styles/Thinkweek.module.scss"

export default function Thinkweek() {
  return (
    <main className={styles.container}>
      <NavBarIndex
        color="#FFDD00"
        img="/img/logo.png"
      />  
    </main>
  )
}
