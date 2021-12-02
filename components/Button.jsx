import styled from 'styled-components'
import {motion} from "framer-motion"

const ButtonComponent= styled.button`
  border-radius: ${props=>props.borderRadius};
  border: 1.3px solid ${props=>props.borderColor};
  color: ${props=>props.fontColor};
  font-size: ${props=>props.fontSize};
  background: ${props=>props.backgroundColor};
  padding:10px 20px;
  cursor: pointer; 
  margin-right: 20px;
`;


export default function Button({borderRadius,borderColor, fontSize,fontColor,backgroundColor,text}) {
  return (
    <ButtonComponent
      borderRadius={borderRadius}
      borderColor={borderColor}
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    >
      {text}
    </ButtonComponent>
  )
}
