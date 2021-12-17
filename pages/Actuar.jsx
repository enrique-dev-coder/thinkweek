import VideoLayout from "../components/VideoLayout"
import {ActuarVideos} from "../data"
import NavBarIndex from "../components/NavBarIndex"
import Footer from "../components/Footer"
import { useState,useEffect } from "react"
import LoadingScreen from "../components/LoadingScreen"
import {motion,AnimatePresence} from "framer-motion"
import Signup from "../components/Signup"
export default function Actuar({actuarVideos}) {
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
        ) : (
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
                title="ACTUAR"
                paragraph="A veces hay que ACTUAR, para poder seguir"
                videos={actuarVideos}
                left="/Pensar"
                right="/"
              />
            </main>
            <Signup/>
            <Footer/>
          </>
        )
      }
  
   </AnimatePresence>
  )
}

export const getStaticProps = async()=>{
  const actuarVideos = ActuarVideos 
  return{
    props:{actuarVideos},
  }
}

