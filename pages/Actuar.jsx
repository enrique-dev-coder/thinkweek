import VideoLayout from "../components/VideoLayout"
import {ActuarVideos} from "../data"
import NavBarIndex from "../components/NavBarIndex"
export default function Actuar({actuarVideos}) {
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
          title="ACTUAR"
          paragraph="A veces hay que ACTUAR, para poder seguir"
          videos={actuarVideos}
          left="/Pensar"
          right="/"
        />
      </main>
   </>
  )
}

export const getStaticProps = async()=>{
  const actuarVideos = ActuarVideos 
  return{
    props:{actuarVideos},
  }
}

