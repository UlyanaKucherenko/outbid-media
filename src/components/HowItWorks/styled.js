import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-block: 80px;
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
`
const RowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const WrapImg = styled.div`
  max-width: 514px;
  width: 50%;
  height: 320px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const WrapText = styled.div`
  width: 50%;
  max-width: 556px;
 
`
const Subtitle = styled.div`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
`
const Text = styled.div`
  margin-bottom: 24px;
  font-weight: 400;
  
  &:last-child {
    margin-bottom: 0;
  }
`

export {Wrapper, Title, InfoBlock, RowItem, WrapImg, Img, WrapText, Subtitle, Text}