import {Wrapper, Title, InfoBlock} from "./styled";

import {infoBlocks} from "./config";

import SectionBlock from "./SectionBlock";

function HowItWorks() {
  return (
    <Wrapper id="howItWork">
      <Title> How It Works</Title>
      <InfoBlock>
        <SectionBlock item={infoBlocks[0]}/>
        <SectionBlock item={infoBlocks[1]} reverse/>
        <SectionBlock item={infoBlocks[2]}/>
      </InfoBlock>
    </Wrapper>
  )
}

export default HowItWorks