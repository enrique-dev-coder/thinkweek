import VideoLayout from "../components/VideoLayout"
import {PararVideos} from"../data"
import Signup from "../components/Signup"
import NavBarIndex from "../components/NavBarIndex"
import Footer from "../components/Footer"
import { useState,useEffect } from "react"
import LoadingScreen from "../components/LoadingScreen"
import {motion,AnimatePresence} from "framer-motion"

export default function Home({videos}) {
 const [loading,setLoading] = useState(false)
 
 //cambiar el estado del laoding
 useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },8000)
},[])
  return (
    <AnimatePresence>
    {
      loading ? (
        <motion.div key="loader">
          <LoadingScreen/>
        </motion.div>
      ):(
        <>
        <div className="navbarColor">
          <NavBarIndex
          
          color="#FFDD00"
            img="/img/logo.png"
            background="rgba(0, 0, 0, 0.85)"
            menuTextColor="#FFDD00"
          />
        </div>
        <main>
          <VideoLayout 
          key={videos.id}
          title="PARAR"
          paragraph="A veces hay que PARAR, para poder seguir"
          videos={videos}
          left="/Actuar"
          right="/Pensar"
          />
         <Signup/>
        </main>
        <Footer/>
        </>
      )
    }
    </AnimatePresence>
  )
}
 
export const getStaticProps = async()=>{

  const videos = PararVideos 

  return{
    props:{videos},
  }
}

//intentar poner global el estado de loading 
//para que se carge mientras se renderizen los videos??
