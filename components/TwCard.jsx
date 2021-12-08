import React from 'react'
import styled from 'styled-components'
import {motion,useMotionValue, useTransform} from "framer-motion"

const CardContainer = styled(motion.div)`
 width: 285px;
 height:500px;
 display:flex;
 flex-direction:column;
 justify-content: flex-end;
 border-radius:25px;
 box-shadow: 0 2px 7px 1px rgba(31,31,31,.2);
 background-image: url(${props=>props.backgroundimg});
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 color: #fff;
 position:relative;
 perspective: 2000;
 cursor: grab;
 overflow: visible;
`;
const CardTitleContainer= styled.div`
  width: 80%;

`;
const CardTitle = styled(motion.h2)`
    font-size: 28px;
    color: white;
    margin-left: -17%;
`;

const CardP= styled(motion.p)`
  font-size: 2.5rem;
  color: white;
  margin-left: -16%;
`;

export default function TwCard({backgroundimg,title,desc}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX= useTransform(y,[-100,100],[30,-30]);
  const rotateY= useTransform(x,[-100,100],[-30,30]);
  return (
    <CardContainer
    drag 
    dragElastic={.16} 
    dragConstraints={{top:0,left:0,right:0,bottom:0}}
    whileTap={{cursor:"grabbing"}}
    backgroundimg = {backgroundimg}
    style={{x,y,rotateX,rotateY,z:100}} 
    //style={{backgroundImage:`${backgroundImg}`}}
    >
    <CardTitle
          style= {{x,y,rotateX,rotateY,z:100}} 
          drag
          dragElastic={.12}
          dragConstraints={{top:0,left:0,right:0,bottom:0}}
          whileTap={{cursor:"grabbing"}}
    >{title}</CardTitle> 
    <CardP
             style= {{x,y,rotateX,rotateY,z:100}} 
             drag
             dragElastic={.12}
             dragConstraints={{top:0,left:0,right:0,bottom:0}}
             whileTap={{cursor:"grabbing"}}
    >{desc}</CardP>    
    </CardContainer>
  )
}
