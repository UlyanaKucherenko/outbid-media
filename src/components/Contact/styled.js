import styled from "styled-components";
const Wrapper = styled.section`
  position: relative;
  min-height: 682px;
  width: 100%;
`
const WrapImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`

const InfoBlock = styled.div`
  position: relative;
  min-height: 682px;
  background-color: #291d3c;
  opacity: 0.88;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  min-height: 682px;
  margin: 0 auto;
  color: var(--white);
`
const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  margin-bottom: 12px;
`
const Subtitle = styled.div`
  margin-bottom: 56px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
`

export {Wrapper, WrapImg, Img, InfoBlock, Content, Title, Subtitle}