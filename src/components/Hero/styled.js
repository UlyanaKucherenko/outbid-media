import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  padding-top: 72px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Title = styled.h1`
  margin-bottom: 25px;
  max-width: 480px;
  width: 100%;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  color: var(--white);
`

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  background-color: transparent;
  border: 2px solid var(--main-green-color);
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--main-green-color);
  white-space: nowrap;

  &:hover {
    background: var(--main-green-color);
    color: var(--white);
  }
`

export {Wrapper, WrapImg, Img, InfoBlock, Title, Btn}