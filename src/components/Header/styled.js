import styled from 'styled-components';

const Wrapper = styled.header`
  background: rgba(0, 0, 0, 0.4);
  height: 72px;
  position: fixed;
  top: 0;
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
  padding: 20px 15px;
`

const WrapImg = styled.a`
  max-width: 193px;
  height: 33px;

`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const Nav = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
`

const  NavLink= styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: var(--white);
  text-decoration: none;
  margin-right: 30px;
  list-style: none;

  &:hover {
    color: var(--main-green-color);
    text-decoration: none;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

const IconMenu = styled.a`
  width: 36px;
  height: 36px;
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`

export {Wrapper, Container, WrapImg, Img, Nav , NavLink, IconMenu}