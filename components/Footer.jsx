import styled from 'styled-components'
import { IconContext } from 'react-icons';
import { AiOutlineMail,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook } from "react-icons/ai";
const FooterContainer = styled.div`
  width: 100%;
  background-color: black;

  height: 200px;
  display: flex;
    flex-direction: column;
    justify-content: center;
  
`;
const IconsContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
`;
const SocialContainer = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;
const SocialTitle = styled.p`
  color: #F4C900;
  font-size: 12px;
  margin-left: 10px;
`



export default function Footer() {
  return (
  <IconContext.Provider 
  value={{ color: "#F4C900", className: "global-class-name"}}>
      <FooterContainer>
        <IconsContainer>
          <SocialContainer>
            <AiOutlineMail size={24}/>
            <SocialTitle>info@thinkweek.company</SocialTitle>
          </SocialContainer>
          <SocialContainer>
            <AiOutlineLinkedin size={24}/>
            <SocialTitle>thinkweek</SocialTitle>
          </SocialContainer>
          <SocialContainer>
            <AiOutlineFacebook size={24}/>
            <SocialTitle>Think Week</SocialTitle>
          </SocialContainer>
          <SocialContainer>
            <AiOutlineInstagram size={24}/>
            <SocialTitle>thinkweek.company</SocialTitle>
          </SocialContainer>
        </IconsContainer>
      </FooterContainer>
  </IconContext.Provider>
  )
}
