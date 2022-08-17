import {Wrapper, WrapImg, Img, InfoBlock, Content, Title, Subtitle} from './styled'
import ContactBg from "../../assets/img/contact-bg.jpg";
import ContactForm from "./ContactForm";

function Index() {
  return (
    <Wrapper>
      <WrapImg>
        <Img src={ContactBg}/>
      </WrapImg>
      <InfoBlock>
        <Content>
          <Title>Contact</Title>
          <Subtitle>Need more customers, help with your web-design, or advice on your IT infrastructure?</Subtitle>
          <ContactForm/>
        </Content>
      </InfoBlock>
    </Wrapper>
  )
}

export default Index