import {Wrapper, Title, InfoBlock, RowItem, WrapImg, Img, WrapText, Subtitle, Text} from "./styled";
import img1 from '../../assets/img/sec1-img1.png';

function HowItWorks() {
  return (
    <Wrapper>
      <Title> How It Works</Title>
      <InfoBlock>
        <RowItem>
          <WrapImg>
            <Img src={img1} alt=""/>
          </WrapImg>
          <WrapText>
            <Subtitle>
              <span>Pay-per-customer</span> advertising.
            </Subtitle>
            <Text>
              You don't really need clicks, impressions, or post likes. You need customers to buy your products and
              services.
            </Text>
            <Text>
              We help you build the right marketing strategy and acquire ready-to-engage customers on a
              cost-per-outcome basis. You only pay when you make profits.
            </Text>
          </WrapText>
        </RowItem>
        <RowItem>
          <WrapText>
            <Subtitle>
              <span>Pay-per-customer</span> advertising.
            </Subtitle>
            <Text>
              You don't really need clicks, impressions, or post likes. You need customers to buy your products and
              services.
            </Text>
            <Text>
              We help you build the right marketing strategy and acquire ready-to-engage customers on a
              cost-per-outcome basis. You only pay when you make profits.
            </Text>
          </WrapText>
          <WrapImg>
            <Img src={img1} alt=""/>
          </WrapImg>
        </RowItem>
      </InfoBlock>
    </Wrapper>
  )
}

export default HowItWorks