import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 600px;
  padding-block: 72px;
  width: 100%;
`
const InfoBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  background: #F4F4F4;
  border-radius: 0 250px;
  @media screen and (max-width: 998px) {
    border-radius: 0 0;
  }
`

const Title = styled.h2`
  margin-bottom: 25px;
  max-width: 900px;
  width: 100%;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  text-align: center;
`
const Subtitle = styled.h2`
  margin-bottom: 25px;
  max-width: 978px;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  line-height: 135%;
  text-align: center;
`

const Text = styled.div`
  max-width: 680px;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  line-height: 135%;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
`
const SocialNetworkLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  max-width: 244px;
  width: 100%;
  transform: rotate(-90deg);
`

const SocialNetworkRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  justify-content: flex-end;
  gap: 8px;
  max-width: 244px;
  width: 100%;
  transform: rotate(90deg);
`
const WrapImg = styled.div`
  width: 110px;
  height: 110px;
  transform: rotate(90deg);
  &:nth-child(1){
    width: 50px;
  }
  &:nth-child(3){
    width: 96px;
  }
  @media screen and (max-width: 998px) {
    display: none;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`



export {Wrapper, WrapImg, Img, InfoBlock, Title, Subtitle, Text, SocialNetworkLeft, SocialNetworkRight}