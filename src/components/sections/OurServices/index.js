import {InfoBlock, Title, Wrapper} from "./styled";

import ServicesItem from "./ServicesItem";


function OurServices() {
  return(
    <Wrapper id="whoWeServe">
      <Title>Our Services</Title>
      <InfoBlock>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
        <ServicesItem/>
      </InfoBlock>
    </Wrapper>
  )
}

export default OurServices