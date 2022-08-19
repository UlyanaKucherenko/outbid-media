import {InfoBlock, Title, Wrapper} from "./styled";
import ServeItem from "./ServeItem";


function WhoWeServe() {
  return(
    <Wrapper id="whoWeServe">
      <Title>Who We Serve</Title>
      <InfoBlock>
       <ServeItem/>
       <ServeItem/>
       <ServeItem/>
      </InfoBlock>
    </Wrapper>
  )
}

export default WhoWeServe