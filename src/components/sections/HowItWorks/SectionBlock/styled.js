import styled from "styled-components";

const RowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
  @media screen and (max-width: 998px) {
    flex-direction: column;
    justify-content: center;
  }
`
const WrapImg = styled.div`
  max-width: 514px;
  width: 50%;
  height: 320px;

  @media screen and (max-width: 998px) {
    width: 100%;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const WrapText = styled.div`
  width: 50%;
  max-width: 556px;
  @media screen and (max-width: 998px) {
    width: 100%;
  }

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

export { RowItem, WrapImg, Img, WrapText, Subtitle, Text}