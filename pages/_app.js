import Layout from '../components/Layout'
import '../styles/globals.css'
import { useEffect } from 'react'
//el remove es para que no se carge siempre el script cuando se cargen las otras paginas
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    const threeScript = document.createElement("script")
    threeScript.setAttribute("id","threescript")
    threeScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js")
    document.getElementsByTagName("head")[0].appendChild(threeScript)
    return()=>{
      if(threeScript){
        threeScript.remove()
      }
    }
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
  
}

export default MyApp
