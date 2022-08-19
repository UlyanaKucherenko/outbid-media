import logo from '../../assets/img/logo.svg';
import iconMenu from '../../assets/img/icon-menu.svg';
import {Wrapper, Container, Img, NavLink, WrapImg, Nav, IconMenu} from './styled';

function Header() {

  return (
    <Wrapper>
      <Container>
        <WrapImg href="/">
          <Img src={logo} alt="logo"/>
        </WrapImg>
        <Nav>
          <NavLink><a href="#howItWork">How It Works</a></NavLink>
          <NavLink><a href="#whoWeServe">Who We Serve</a></NavLink>
          <NavLink><a href="#about">About Us</a></NavLink>
          <NavLink><a href="#contact">Contact</a></NavLink>
        </Nav>
        <IconMenu>
          <Img src={iconMenu} alt="logo"/>
        </IconMenu>

      </Container>
    </Wrapper>
  )
}

export default Header