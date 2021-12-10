import React from 'react'
import NavBarIndex from '../components/NavBarIndex'
import TwCard from '../components/TwCard'
import styles from "../styles/Thinkweek.module.scss"
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import {Team} from "../data" 
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'
//para styled components usar la direccion del fondo de la imagen nomas como "/img"
export default function Thinkweek({TeamData}) {

  return (
    <div className={styles.super_container}>
    <main className={styles.container}>
      <NavBarIndex 
        color="#FFDD00"
        img="/img/logo.png"
      />
      <div className={styles.cards_wrapper}>
        <section className={styles.container_cards}>
          <TwCard
            backgroundimg="/img/beachbg.jpg"
            title="¿QUÉ HACEMOS?"
            desc="Ayudamos a las personas y a los equipos a pensar, reflexionar y encontrar ideas. Somos una experiencia"
          />  
          <TwCard
            backgroundimg="/img/bridgebg.jpg"
            title="¿PARA QUÉ?"
            desc="Para promover el cambio y la innovación en las entidades, através del pensamiento y la reflexión."
          />  
          <TwCard
            backgroundimg="/img/lighthouse.jpg"
            title="¿COMO LO HACEMOS?"
            desc="Hemos diseñado una metodología
            que facilita los procesos de
            pensamiento, basada en
            4 pilares."
          />  
        </section>
      </div>
        <section className={styles.container_services}>
            <h2>¿QUÉ OFRECEMOS?</h2>
            <div className={styles.container_services_cards}>
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
            </div>
            <div className={styles.container_services_buttons}>
                <Button
                  borderRadius="6px"
                  borderColor="#F4C900"
                  fontSize="18px"
                  fontColor="#FFDD00"
                  backgroundColor= "transparent"
                  text="Saber más"
                />
                  <Button
                  borderRadius="6px"
                  borderColor="#F4C900"
                  fontSize="18px"
                  fontColor="#FFDD00"
                  backgroundColor= "transparent"
                  text="Contáctanos"
                />
            </div>
        </section>
        <h2 style={{color:"white", textAlign:"center",fontSize:"60px"}}>
          NUESTRO EQUIPO
        </h2>

        <div>
          <ImageSlider
            data={TeamData}
          />
        </div>
        <Footer/>
    </main>
    <div className={styles.background}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
  )
}


//traer la data de el equipo
export const getStaticProps = async()=>{
  const TeamData = Team 
  return{
    props:{TeamData},
  }
}