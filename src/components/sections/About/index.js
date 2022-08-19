import aboutImg from '../../../assets/img/about-img.svg';

import {Wrapper, WrapImg, Img, InfoBlock, Title, Text} from './styled';

function About() {

  return (
    <Wrapper id="about">
      <WrapImg>
        <Img src={aboutImg}/>
      </WrapImg>
      <InfoBlock>
        <Title>About Us</Title>
        <Text>As a company, we aim to simplify the way our clients think of online customer acquisition. It is not something complicated, it is not an art, it is not even a science..</Text>
        <Text>It is just a set of processes you need to develop to be able to reach the right people and deliver the right message to them. And the most important part is that you can outsource that easily staying focused on what you do best: serving your customers.</Text>
      </InfoBlock>
    </Wrapper>
  )
}

export default About