import styled from 'styled-components'

import React from 'react'

const MobileTwCardsWrapper = styled.div`
    display: flex;
    height: 600px;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
`;

const MobileTwCardContainer= styled.div`
  position:relative;
  min-width: 285px;
  height:500px;
  width:70%;
  display:flex;
  flex-direction:column;
  border-radius:25px;
  color: #fff;
  background-color:yellow;
  margin: 50px 10px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
`
const MobileTwCardTitle= styled.h2`
  font-size:28px;
  text-align:center;
  font-weight:600;
`
const MobileTwCardParagraph= styled.p`
  text-align:center;
  font-size:20px;
  width: 80%;
  margin:0 auto;
`

export default function MobileTwCards() {
  return (
    <MobileTwCardsWrapper>
      <MobileTwCardContainer style={{backgroundImage:"url(/img/beachbg.jpg)"}}>
        <MobileTwCardTitle>
          ¿QUÉ HACEMOS?
        </MobileTwCardTitle>
        <MobileTwCardParagraph>
        Ayudamos a las personas y a los equipos a pensar, reflexionar y encontrar ideas. Somos una experiencia
        </MobileTwCardParagraph>
      </MobileTwCardContainer>
      <MobileTwCardContainer style={{backgroundImage:"url(/img/bridgebg.jpg)"}}>
        <MobileTwCardTitle>
          ¿PARA QUÉ?
        </MobileTwCardTitle>
        <MobileTwCardParagraph>
        Para promover el cambio y la innovación en las entidades, através del pensamiento y la reflexión.
        </MobileTwCardParagraph>
      </MobileTwCardContainer>
      <MobileTwCardContainer style={{backgroundImage:"url(/img/lighthouse.jpg)"}}>
       <MobileTwCardTitle>
         ¿COMO SE HACE?
        </MobileTwCardTitle>
        <MobileTwCardParagraph>
        Hemos diseñado una metodología
            que facilita los procesos de
            pensamiento, basada en
            4 pilares
        </MobileTwCardParagraph>
      </MobileTwCardContainer>
    </MobileTwCardsWrapper>
  )
}
