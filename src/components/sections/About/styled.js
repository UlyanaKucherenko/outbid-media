import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 600px;
  padding-top: 72px;
  width: 100%;
  background: linear-gradient(178.88deg, #C5DAAC 0.8%, #B8D3AA 26.03%, #7CA394 61.95%, #63897D 99.04%);
  color: var(--white);
`
const WrapImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 998px) {
    display: none;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`

const InfoBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`

const Title = styled.h2`
  margin-bottom: 25px;
  max-width: 480px;
  width: 100%;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
`

const Text = styled.div`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  max-width: 480px;

  &:last-child {
    margin-bottom: 0;
  }
`

export {Wrapper, WrapImg, Img, InfoBlock, Title, Text}