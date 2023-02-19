import { useState } from 'react';
import {Header, Logo, Nav, Container, Footer} from './LayoutStyles'
import Link from 'next/link';
import Cart from '../Cart/Cart';
import {BsCartFill} from 'react-icons/bs';


const Layout = ({ children }) => {

  const [open, setIsOpen] = useState(false);

  return (
    <>
      <Header>
        <Logo>MyHomeMarket</Logo>
        <Nav>
          <Link className='navLink' href={"/"}>Home</Link>
          <Link className='navLink' href={"/market"}>Market</Link>
          <Link className='navLink' href={"/about"}>About</Link>
        </Nav>
        <BsCartFill onClick={() => setIsOpen(!open)} className='cart' />
      </Header>
      {
        open &&
        <Cart />
      }
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