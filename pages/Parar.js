import VideoLayout from "../components/VideoLayout"
import {PararVideos} from"../data"
import Signup from "../components/Signup"
import NavBar from "../components/NavBar"
export default function Home({videos}) {
  return (
    <>
    <NavBar/>
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
    </>
  )
}
 
export const getStaticProps = async()=>{
  const videos = PararVideos 
  return{
    props:{videos},
  }
}