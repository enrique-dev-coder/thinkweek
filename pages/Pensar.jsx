import {PensarVideos} from "../data"
import VideoLayout from "../components/VideoLayout"
import NavBar from "../components/NavBar"
export default function Pensar({pensarVideos}) {
 
  return (
    <>
      <NavBar/>
        <main>
          <VideoLayout 
            title="PENSAR"
            paragraph="A veces hay que PENSAR, para poder seguir"
            videos={PensarVideos}
            left="/"
            right="/Actuar"
          />
        </main>
    </>
  )
}



export const getStaticProps = async()=>{
  const pensarVideos = PensarVideos 
  return{
    props:{pensarVideos},
  }
}