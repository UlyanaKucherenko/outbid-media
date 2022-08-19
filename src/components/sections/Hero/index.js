import heroBg from '../../../assets/img/hero-bg.png';

import {Wrapper, WrapImg, Img, InfoBlock, Title, Btn} from './styled';

function Hero() {

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <Wrapper>
      <WrapImg>
        <Img src={heroBg}/>
      </WrapImg>
      <InfoBlock>
        <Title>Don’t pay for marketing but for customers.</Title>
        <Btn onClick={scrollToContact}>Contact Us</Btn>
      </InfoBlock>
    </Wrapper>
  )
}

export default Hero