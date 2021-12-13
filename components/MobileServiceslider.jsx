import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import React from 'react'

export default function MobileServiceslider() {
  const settings ={
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
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
    <Slider {...settings}>
        <ServiceCard
                  servicetitle="TIEMPO"
                  servicedesc="Ofrecemos
                  sesiones de 1
                  semana (ThinkWeek) o fin
                  de semana (ThinkWeekEnd),
                  para enfocarnos
                  en trabajar el
                  insight."
                />
                <ServiceCard
                  servicetitle="ENFOQUE"
                  servicedesc="Sólo te centrarás
                  en  una tarea, con
                  todas las
                   necesidades
                  cubiertas."
                />
                <ServiceCard
                  servicetitle="MÉTODO"
                  servicedesc="Que guía
                  a las personas en
                  el proceso de
                  pensar, para llegar
                  a tener ideas de
                  calidad y a partir
                  de ahí trabajar en
                  ellas."
                />
                <ServiceCard
                  servicetitle="ESPACIOS"
                  servicedesc="Exclusivos, en zonas retiradas y tranquilas, con un método adaptado a las necesidades del cliente, buscando resultados eficaces."
                />
    </Slider>
  )
}
