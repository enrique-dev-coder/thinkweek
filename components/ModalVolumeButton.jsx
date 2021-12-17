import React from 'react'
import {motion} from "framer-motion"
//traes el estado global
import {useMusic} from "../context/Audiocontext"





export default function ModalButton(){
  //traes la funcion de handle playing
  const {handlePlaying} = useMusic()
 
  return(
    <>
      <motion.button 
        onClick={handlePlaying} 
        style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}}
        >
        <img src='/img/headphones.png'/>
      </motion.button>
    </>
  )
}