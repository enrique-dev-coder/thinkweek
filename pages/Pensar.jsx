import {PensarVideos} from "../data"
import VideoLayout from "../components/VideoLayout"
import NavBarIndex from "../components/NavBarIndex"
import Footer from "../components/Footer"
export default function Pensar({pensarVideos}) {
 
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
            title="PENSAR"
            paragraph="A veces hay que PENSAR, para poder seguir"
            videos={PensarVideos}
            left="/"
            right="/Actuar"
          />
        </main>
        <Footer/>
    </>
  )
}



export const getStaticProps = async()=>{
  const pensarVideos = PensarVideos 
  return{
    props:{pensarVideos},
  }
}