import VideoLayout from "../components/VideoLayout"
import {ActuarVideos} from "../data"
import NavBar from "../components/NavBar"
export default function Actuar({actuarVideos}) {
  return (
    <>
      <NavBar/>
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

