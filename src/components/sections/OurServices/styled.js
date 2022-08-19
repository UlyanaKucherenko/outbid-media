import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 15px;
`
const Title = styled.h2`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  text-align: center;
`

const InfoBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media screen and (max-width: 998px) {
    grid-template-columns: 1fr;
  }
`

export {Wrapper, Title, InfoBlock}