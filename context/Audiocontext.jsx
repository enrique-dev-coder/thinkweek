import { createContext,useContext ,useState} from "react";
import ReactHowler from 'react-howler'

export const MusicContext =  createContext()

//usar el contexto dentro de la aplicacion

export const useMusic= () => useContext(MusicContext)

export const MusicProvider = ({children})=>{
  const [playing,setPlaying]= useState(false)

  const handlePlaying = ()=>{
    playing !=false ? setPlaying(false) : setPlaying(true) 
  }

  return(
    <>
      <ReactHowler
        src='/relaxing.mp3'
        playing={playing}
        loop={true}
      />
     <MusicContext.Provider value={{playing,handlePlaying}}>{children}</MusicContext.Provider>
    </>
  )

}