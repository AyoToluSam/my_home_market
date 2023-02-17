import {Header, Logo, Nav, Container, Footer} from './LayoutStyles'
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Logo>MyHomeMarket</Logo>
        <Nav>
          <Link className='navLink' href={"/"}>Home</Link>
          <Link className='navLink' href={"/market"}>Market</Link>
          <Link className='navLink' href={"/about"}>About</Link>
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