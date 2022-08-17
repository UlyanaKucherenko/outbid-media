import logo from '../../assets/img/logo.svg';

import {Wrapper, Container, MenuLink, Img, WrapImg} from './styled';

function Header() {
  return(
    <Wrapper>
      <Container>
        <WrapImg>
          <Img src={logo} alt="logo" />
        </WrapImg>
        <nav className="nav">
          <MenuLink href="#">How It Works</MenuLink>
          <MenuLink href="#">Who We Serve</MenuLink>
          <MenuLink href="#">Who We Serve</MenuLink>
          <MenuLink href="#">About Us</MenuLink>
          <MenuLink href="#">Contact</MenuLink>
        </nav>
      </Container>
    </Wrapper>
  )
}
export default Header