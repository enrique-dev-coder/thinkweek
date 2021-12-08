import styled from 'styled-components'
import {motion} from"framer-motion"


const TextContainer= styled.div`
  width:50%;
  margin:0 auto;
`;

const AnimatedTitleOne= styled(motion.h2)`
  font-size:50px;
  color:#FFDD00;
  text-align: center;
`;
const AnimatedTitleTwo= styled(motion.h2)`
  font-size:50px;
  color:#FFDD00;
  text-align: center;
`;

const AnimatedTitleThree= styled(motion.h2)`
  font-size:50px;
  color:#FFDD00;
  text-align: center;

`;





export default function AnimatedText() {
  return (
    <>
    <TextContainer>
      <AnimatedTitleOne
      animate={{
        x: 0,
        y:500 ,
        scale: 1,
        rotate: 0,
      }}
      transition={{ repeat: Infinity,ease: "easeOut", duration: 3 }}
      >Parar</AnimatedTitleOne>
    </TextContainer>

    </>
  )
}
