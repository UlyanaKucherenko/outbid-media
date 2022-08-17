import heroBg from '../../assets/img/hero-bg.png';

import {Wrapper, WrapImg, Img, InfoBlock, Title, Btn} from './styled';

function Hero() {

  return (
    <Wrapper>
      <WrapImg>
        <Img src={heroBg} />
      </WrapImg>
      <InfoBlock>
        <Title>Don’t pay for marketing but for customers.</Title>
        <Btn>Contact Us</Btn>
      </InfoBlock>
    </Wrapper>
  )
}

export default Hero