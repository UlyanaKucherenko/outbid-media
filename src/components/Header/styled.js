import styled from 'styled-components';

const Wrapper = styled.header`
  background: rgba(0, 0, 0, 0.1);
  height: 72px;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index: 2;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 8px;
`

const WrapImg = styled.div`
  max-width: 193px;
  height: 33px;
  
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`

const MenuLink = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: var(--white);
  text-decoration: none;
  margin-right: 30px;

  &:hover {
    color: var(--main-green-color);
    text-decoration: none;
  }

  &:last-child {
    margin-right: 0;
  }
`

export {Wrapper, Container, WrapImg, Img, MenuLink}