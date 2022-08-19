import instagram from '../../../assets/img/instagram.svg';
import facebook from '../../../assets/img/facebook.svg';
import tiktok from '../../../assets/img/tiktok.svg';
import snapchut from '../../../assets/img/snapchut.svg';
import youtube from '../../../assets/img/youtube.svg';
import twitter from '../../../assets/img/twitter.svg';

import {Wrapper, WrapImg, Img, InfoBlock, Title, Subtitle, Text, SocialNetworkLeft, SocialNetworkRight} from './styled';

function Sales() {

  return (
    <Wrapper id="about">
      <InfoBlock>
        <SocialNetworkLeft>
          <WrapImg>
            <Img src={snapchut}/>
          </WrapImg>
          <WrapImg>
            <Img src={instagram}/>
          </WrapImg>
          <WrapImg>
            <Img src={tiktok}/>
          </WrapImg>
        </SocialNetworkLeft>
        <SocialNetworkRight>
          <WrapImg>
            <Img src={youtube}/>
          </WrapImg>
          <WrapImg>
            <Img src={facebook}/>
          </WrapImg>
          <WrapImg>
            <Img src={twitter}/>
          </WrapImg>
        </SocialNetworkRight>
        <Title>As marketers, we are absolutely passionate about sales.</Title>
        <Subtitle>We have 10+ years of experience promoting a wide range of products and services online and we do know what it takes to get from zero to a stable flow of ready-to-engage customers.</Subtitle>
        <Text>Facebook, Twitter, Youtube, LinkedIn, Instagram, TikTok, Snapchat, etc. – wherever your customers are, we can make it!</Text>
      </InfoBlock>
    </Wrapper>
  )
}

export default Sales