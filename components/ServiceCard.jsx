import styled from 'styled-components'
import {motion} from "framer-motion"

const ServiceCardContainer= styled(motion.div)`
 width: 285px;
 height:500px;
 display:flex;
 flex-direction:column;
 border: 2px solid #F4C900;
 border-radius:25px;
 background: rgba(255,255,255,.5);
 transition: all .5s ease-in-out;
 cursor: pointer;
`;
const ServiceCardTitle = styled.h2` 
  color:white;
  text-align: center;
  font-size: 3rem;
  border-bottom:2px solid #F4C900;
  padding-bottom: 15px;
`;

const ServiceCardDesc = styled.p`
  color: white;
  font-size: 2.6rem;
  padding:10px 30px;
`;


export default function ServiceCard({servicetitle,servicedesc}) {
  return (
    <ServiceCardContainer
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ServiceCardTitle>{servicetitle}</ServiceCardTitle>
      <ServiceCardDesc>{servicedesc}</ServiceCardDesc>
    </ServiceCardContainer>
  )
}
