import {useRef,useEffect,useState} from 'react'
import styles from "../styles/ImageSlider.module.scss"
import Slider from "react-slick";
import { Color } from 'three';


export default function ImageSlider({data,imageData}) {
  const [desc,setDesc] = useState({})

  const singleImageData = (id)=>{
    //encontrar un solo objeto por el id que se le pase
    const singlePerson = data.findIndex(x=>x.id===id)
    setDesc(data[singlePerson])
  //  console.log(desc)
 }
 
 const objetoVacio = Object.keys(desc).length === 0 && desc.constructor === Object
// console.log(objetoVacio)
 
  const settings ={
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive:[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 }

  return (
        <>
      
        <Slider {...settings} >
        {data.map((d,i)=>(
                  <div 
                    key={i} 
                    className={styles.sliderItem} 
                    onClick={()=>singleImageData(d.id)}
                  >
                    <div className={styles.imgDiv}>
                      <img src={d.foto}/>
                    </div>
                  </div>
                ))}
        </Slider>
          
          {
           // checamos si un objeto esta vacio con ese renglon de codigo
           // console.log(Object.keys(desc).length === 0 && desc.constructor === Object)
           // ese valor se almacena en una variable, da true si es un obejto vacio
           //la idea es que si el obejto del estado esta vacio {} entonces pon el texto generico, cuando le das click el objeot se llena y pon el  texto de la descipcion
            objetoVacio ? (
              <div style={{color:"white"}} className={styles.teamDesc_container}>
              <h2>¡Tenemos un equipo increíble!</h2>
              <p>Somos un equipo multidisciplinario, que ama los procesos de transformación. Hemos dedicado nuestra vida y estudios a motivar procesos de transformación en personas y empresas.</p>
              <p>¡Haz click y conócenos!</p>
              </div>
            ):(
              <div style={{color:"white"}}className={styles.teamDesc_container}>
              <h2>{desc.nombre}</h2>
              <p><b>{desc.puesto}</b></p>
              <p>{desc.descripcion}</p>
            </div>)
          }
      
        </>
  )
}
