import Link from 'next/link';
import { useState, useEffect } from 'react';
import {BodyContainer, Header, Logo, Nav, SmallScreen, CartContainer, ItemCount, Container, Footer} from './LayoutStyles'
import Cart from '../Cart/Cart';
import {BsCartFill} from 'react-icons/bs';
import {RiArrowDropDownLine} from 'react-icons/ri';
import { useCart } from '@/contexts/CartContext';
// import dynamic from 'next/dynamic';


const Layout = ({ children }) => {

  const {isOpen, openCart, cartQuantity} = useCart()
  
  const [isHydrated, setIsHydrated] = useState(false)

  const [openDrop, setOpenDrop] = useState(false)

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <BodyContainer>
      <Header>
        <Logo src='/logo.png'></Logo>
        <Nav>
          <Link className='navLink' href={"/"}>Home</Link>
          <Link className='navLink' href={"/market"}>Market</Link>
          <Link className='navLink' href={"/sell"}>Sell Product</Link>
          <Link className='navLink' href={"/about"}>About</Link>
        </Nav>
        <SmallScreen>
          <p>Home</p>
          <RiArrowDropDownLine onClick={() => setOpenDrop(!openDrop)} className='dropdown' />
          { openDrop &&
            <ul>
              <li><Link href={"/market"}>Market</Link></li>
              <li><Link href={"/sell"}>Sell Product</Link></li>
              <li><Link href={"/about"}>About</Link></li>
            </ul>
          }
        </SmallScreen>
        { isHydrated &&
          <CartContainer onClick={() => openCart()}>
            <BsCartFill className='cart' />
            {cartQuantity > 0 &&
              <ItemCount>
                {cartQuantity}
              </ItemCount>
            }
          </CartContainer>
        }
        {
          isOpen &&
          <Cart/>
        }
      </Header>
      <Container>
        {children}
      </Container>
      <Footer>
        &copy; 2023 My Home Market. All rights reserved.
      </Footer>
    </BodyContainer>
  );
};

export default Layout

//export default dynamic (() => Promise.resolve(Layout), {ssr: false})