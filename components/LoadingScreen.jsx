import React from 'react'
import styles from "../styles/Loadingscreen.module.scss"
import { motion } from "framer-motion";
const container = {
 
  show:{
    transition:{ 
      delayChildren: 0.2,
      staggerChildren: 0.5
    }
  }
}
const item = {
  //aniamcion cuando esta oculta
  hidden:{ opacity:0, y:100},
  //animacion cuando esta viendose
  show:{
    opacity: 1,
    y:0,
    transition:{
      repeat:2,
      ease:[.6,.01,-.05,.95],
      duration:2,
    }
  },
  //animacion de salida
  exit:{
    opacity: 0,
    y:-200,
    transition: {
      ease:"easeInOut",
      duration:.8,
    }
  }
}



export default function LoadingScreen() {
  return (
    <motion.div className={styles.container}
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit">
        <motion.h1 variants={item} className={styles.title} style={{color:"#9D9D9D"}} data-text="PARAR">
          PARAR
        </motion.h1>
        <motion.h1 variants={item} className={styles.title} style={{color:"#F4C900"}} data-text="PENSAR">
          PENSAR
        </motion.h1>
        <motion.h1 variants={item} className={styles.title} data-text="ACTUAR">
            ACTUAR
        </motion.h1>
      
    </motion.div>
  )
}
