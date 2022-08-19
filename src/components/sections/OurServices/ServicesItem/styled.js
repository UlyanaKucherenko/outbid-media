import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const TextContent = styled.div`
  padding: 16px 14px;
`
const Title = styled.h3`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;

`
const Text = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

`
const ImgWrap = styled.div`
  width: 72px;
  height: 72px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
export {Wrap, TextContent, Title, Text, ImgWrap, Img}