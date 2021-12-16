import {PensarVideos} from "../data"
import VideoLayout from "../components/VideoLayout"
import NavBarIndex from "../components/NavBarIndex"
import Footer from "../components/Footer"
import { useState,useEffect } from "react"
import LoadingScreen from "../components/LoadingScreen"
import {motion,AnimatePresence} from "framer-motion"

export default function Pensar({pensarVideos}) {
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
                title="PENSAR"
                paragraph="A veces hay que PENSAR, para poder seguir"
                videos={pensarVideos}
                left="/"
                right="/Actuar"
              />
            </main>
            <Footer/>
          </>
        )
      }

    </AnimatePresence>
  )
}



export const getStaticProps = async()=>{
  const pensarVideos = PensarVideos 
  return{
    props:{pensarVideos},
  }
}