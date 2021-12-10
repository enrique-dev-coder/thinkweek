import VideoLayout from "../components/VideoLayout"
import {PararVideos} from"../data"
import Signup from "../components/Signup"
import NavBarIndex from "../components/NavBarIndex"
import Footer from "../components/Footer"
export default function Home({videos}) {
  return (
    <>
    <div className="navbarColor">
      <NavBarIndex
      
      color="#FFDD00"
        img="/img/logo.png"
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
 
export const getStaticProps = async()=>{
  const videos = PararVideos 
  return{
    props:{videos},
  }
}