import {Header, Logo, Nav, CartContainer, ItemCount, Container, Footer} from './LayoutStyles'
import Link from 'next/link';
import Cart from '../Cart/Cart';
import {BsCartFill} from 'react-icons/bs';
import { useCart } from '@/contexts/CartContext';


const Layout = ({ children }) => {

  const {isOpen, openCart, cartQuantity} = useCart()

  return (
    <div className='bodyContainer'>
      <Header>
        <Logo>MyHomeMarket</Logo>
        <Nav>
          <Link className='navLink' href={"/"}>Home</Link>
          <Link className='navLink' href={"/market"}>Market</Link>
          <Link className='navLink' href={"/about"}>About</Link>
        </Nav>
        <CartContainer>
          <BsCartFill onClick={() => openCart()} className='cart' />
          {cartQuantity > 0 &&
            <ItemCount>
              {cartQuantity}
            </ItemCount>
          }
        </CartContainer>
        {
          isOpen &&
          <Cart />
        }
      </Header>
      <Container>
        {children}
      </Container>
      <Footer>
        &copy; 2023 My Home Market. All rights reserved.
      </Footer>
    </div>
  );
};

export default Layout;