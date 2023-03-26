import Link from 'next/link';
import { useState, useEffect } from 'react';
import {BodyContainer, Header, Logo, Nav, SmallScreen, CartContainer, ItemCount, Container, Footer} from './LayoutStyles'
import Cart from '../components/Cart/Cart';
import {BsCartFill} from 'react-icons/bs';
import {RiArrowDropDownLine} from 'react-icons/ri';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';


const Layout = ({ children }) => {

  const router = useRouter()

  const {isOpen, openCart, cartQuantity} = useCart()
  
  const [isHydrated, setIsHydrated] = useState(false)

  const [openDrop, setOpenDrop] = useState(false)

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDrop = (href) => {
    router.push(href);
    setOpenDrop(false);
  }

  return (
    <BodyContainer>
      <Header>
        <Logo src='/logo.png'></Logo>
        <Nav>
          <Link className='navLink' href="/" >Home</Link>
          <Link className='navLink' href="/Market" >Market</Link>
          <Link className='navLink' href="/sell" >Sell Product</Link>
          <Link className='navLink' href="/About" >About</Link>
        </Nav>
        <SmallScreen>
          <Link href="/" ><p>Home</p></Link>
          <RiArrowDropDownLine onClick={() => setOpenDrop(!openDrop)} className='dropdown' />
          { openDrop &&
            <ul>
              <li onClick={() => handleDrop("/Market")} >Market</li>
              <li onClick={() => handleDrop("/sell")} >Sell Product</li>
              <li onClick={() => handleDrop("/About")} >About</li>
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