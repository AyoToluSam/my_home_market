import Link from 'next/link';
import { useState, useEffect } from 'react';
import {BodyContainer, Header, LogoNav, Logo, Nav, SmallScreen, 
CartContainer, ItemCount, Container, Footer, FooterInfo, Customer,
Contact, Payments, Copyright} from './LayoutStyles'
import Cart from '../components/Cart/Cart';
import {BsCartFill} from 'react-icons/bs';
import {RiArrowDropDownLine, RiFacebookBoxFill, RiInstagramLine, 
RiTwitterFill} from 'react-icons/ri';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/router';
import { useActive } from '@/contexts/ActiveContext';
// import dynamic from 'next/dynamic';


const Layout = ({ children }) => {

  const router = useRouter()

  const {active, setActive} = useActive()

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
        <LogoNav>
          <Logo src="/logo.png"></Logo>
          <Nav>
            <Link
              className={active == 1 ? "active" : "navLink"}
              onClick={() => setActive(1)}
              href="/">
              Home
            </Link>
            <Link
              className={active == 2 ? "active" : "navLink"}
              onClick={() => setActive(2)}
              href="/Market">
              Market
            </Link>
            <Link
              className={active == 3 ? "active" : "navLink"}
              onClick={() => setActive(3)}
              href="/sell">
              Sell Product
            </Link>
            <Link
              className={active == 4 ? "active" : "navLink"}
              onClick={() => setActive(4)}
              href="/About">
              About
            </Link>
          </Nav>
        </LogoNav>
        <SmallScreen>
          <Link href="/">
            <p>Home</p>
          </Link>
          <RiArrowDropDownLine
            onClick={() => setOpenDrop(!openDrop)}
            className="dropdown"
          />
          {openDrop && (
            <ul>
              <li onClick={() => handleDrop("/Market")}>Market</li>
              <li onClick={() => handleDrop("/sell")}>Sell Product</li>
              <li onClick={() => handleDrop("/About")}>About</li>
            </ul>
          )}
        </SmallScreen>
        {isHydrated && (
          <CartContainer onClick={() => openCart()}>
            <BsCartFill className="cart" />
            <p>Cart</p>
            {cartQuantity > 0 && <ItemCount>{cartQuantity}</ItemCount>}
          </CartContainer>
        )}
        {isOpen && <Cart />}
      </Header>
      <Container>{children}</Container>
      <Footer>
        <FooterInfo>
          <Customer>
            <h3>CUSTOMER SUPPORT</h3>
            <p>Phone: +234 1 4539086</p>
            <p>info@myhomemarket.com</p>
            <p>Hours: Mon. - Fri. 8AM - 5PM</p>
            <span>
              <RiFacebookBoxFill />
              <RiInstagramLine />
              <RiTwitterFill />
            </span>
          </Customer>
          <Contact>
            <h3>CONTACT</h3>
            <p>7B Kafayat Abdulrasaq Street, Lekki, Lagos, Nigeria</p>
          </Contact>
          <Payments>
            <h3>PAYMENT PARTNERS</h3>
            <div>
              <img src="/Verve.png" alt="Verve" />
              <img src="/Mastercard.png" alt="Mastercard" />
              <img src="/Visa.png" alt="Visa" />
              <img src="/paystack.png" alt="Paystack" />
              <img src="/Flutterwave.png" alt="Flutterwave" />
              <img src="/Quickteller.png" alt="Quickteller" />
            </div>
          </Payments>
        </FooterInfo>
        <Copyright>&copy; 2023 My Home Market. All rights reserved.</Copyright>
      </Footer>
    </BodyContainer>
  );
};

export default Layout

//export default dynamic (() => Promise.resolve(Layout), {ssr: false})