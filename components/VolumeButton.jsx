
import React from 'react'
import styled from 'styled-components'

import {useMusic} from "../context/Audiocontext"

const ButtonController= styled.div`
  background-color: transparent;
  border:none;
`;



export default function AudioButton({color}) {
  const {playing,handlePlaying} = useMusic()

  return (
    <>

        <ButtonController 
          onClick={handlePlaying} 
        >     
          {
            playing === true ? 
            (<img src={`/img/volumeON${color}.png`} alt="Activa el audio" />):
            (<img src={`/img/volumeOFF${color}.png`} alt="Activa el audio" />)
          }  
          
        </ButtonController>     
    </>
  )
}



 ///no se puede hacer autoplay por politicas de google, se tiene qu hacer un boton para el play y el pause
 //el boton lo mas seguro es que requiera un estado global par aque pueda tener esas propiedades