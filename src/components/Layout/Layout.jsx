import {Header, Logo, Nav, NavLink, Container, Footer} from './LayoutStyles'
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Logo>MyHomeMarket</Logo>
        <Nav>
          <Link><NavLink>Home</NavLink></Link>
          <Link><NavLink>Market</NavLink></Link>
          <Link><NavLink>About</NavLink></Link>
        </Nav>
      </Header>
      <Container>
        {children}
      </Container>
      <Footer>
        &copy; 2023 My Home Market. All rights reserved.
      </Footer>
    </>
  );
};

export default Layout;