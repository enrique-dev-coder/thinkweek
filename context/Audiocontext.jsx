import { createContext,useContext ,useState} from "react";
import ReactHowler from 'react-howler'

export const MusicContext =  createContext()

//usar el contexto dentro de la aplicacion

export const useMusic= () => useContext(MusicContext)

export const MusicProvider = ({children})=>{
  const [playing,setPlaying]= useState(false)
  const [loading,setLoading]= useState(false)

  const handlePlaying = ()=>{
    playing !=false ? setPlaying(false) : setPlaying(true) 
  }
  const loadingSetTrue=()=>{
    setLoading(true)
  }
  const loadingSetFalse=()=>{
    setLoading(false)
  }
  return(
    <>
      <ReactHowler
        src='/relaxing.mp3'
        playing={playing}
        loop={true}
      />
     <MusicContext.Provider value={{playing,handlePlaying,loading,loadingSetTrue,loadingSetFalse}}>{children}</MusicContext.Provider>
    </>
  )

}