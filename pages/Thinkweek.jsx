import React from 'react'
import NavBarIndex from '../components/NavBarIndex'
import TwCard from '../components/TwCard'
import styles from "../styles/Thinkweek.module.scss"
import Button from '../components/Button'
import {Team} from "../data" 
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'
import MobileServiceslider from '../components/MobileServiceslider'
import MobileTwCards from '../components/MobileTwCards'
//para styled components usar la direccion del fondo de la imagen nomas como "/img"
export default function Thinkweek({TeamData}) {

  return (
    <div className={styles.super_container}>
    <main className={styles.container}>
      <NavBarIndex 
        color="#FFDD00"
        img="/img/logo.png"
        background="rgba(0, 0, 0, 0.85)"
        menuTextColor="#FFDD00"
      />
      {/**Section for desktop **/}
      <div className={styles.cards_wrapper}>
        <section className={styles.container_cards}>
          <TwCard
            backgroundimg="/img/beachbg.jpg"
            title="Somos una experiencia"
            desc="Ayudamos a las personas y a los equipos a pensar, reflexionar y encontrar ideas. Somos una experiencia"
          />  
          <TwCard
            backgroundimg="/img/bridgebg.jpg"
            title="¿PARA QUÉ?"
            desc="Para promover el cambio y la innovación en las entidades, a través del pensamiento y la reflexión."
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
          {/**Section for mobile **/}
        <div className={styles.cardsMobile}>
          <MobileTwCards />
        </div>
        <section className={styles.container_services}>
            <h2>¿QUÉ OFRECEMOS?</h2>
              <MobileServiceslider/>
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