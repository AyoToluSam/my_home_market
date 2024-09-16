import Link from "next/link";
import { useState, useEffect } from "react";
import {
  BodyContainer,
  Header,
  LogoNav,
  Logo,
  Nav,
  SmallScreen,
  CartContainer,
  ItemCount,
  Container,
  Footer,
  FooterInfo,
  Customer,
  Contact,
  Payments,
  Copyright,
} from "./LayoutStyles";
import Cart from "../components/Cart/Cart";
import { BsCart } from "react-icons/bs";
import {
  RiArrowDropDownLine,
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  openCart,
  selectCartQuantity,
  selectIsOpen,
} from "@/redux/features/cartSlice";
// import dynamic from 'next/dynamic';

const NAV_LINKS = [
  { title: "Home", path: "/" },
  { title: "Market", path: "/market" },
  { title: "Sell Product", path: "/sell" },
  { title: "About", path: "/about" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsOpen);
  const cartQuantity = useSelector(selectCartQuantity);

  const [isHydrated, setIsHydrated] = useState(false);

  const [openDrop, setOpenDrop] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDrop = (href: string) => {
    router.push(href);
    setOpenDrop(false);
  };

  return (
    <BodyContainer>
      <Header>
        <LogoNav>
          <Logo src="/logo.png"></Logo>
          <Nav>
            {NAV_LINKS.map(({ title, path }, index) => (
              <Link
                key={path + index}
                className={currentPath === path ? "active" : "navLink"}
                href={path}
              >
                {title}
              </Link>
            ))}
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
              <li onClick={() => handleDrop("/market")}>Market</li>
              <li onClick={() => handleDrop("/sell")}>Sell Product</li>
              <li onClick={() => handleDrop("/about")}>About</li>
            </ul>
          )}
        </SmallScreen>

        {isHydrated && (
          <CartContainer onClick={() => dispatch(openCart())}>
            <BsCart className="cart" />
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

export default Layout;

//export default dynamic (() => Promise.resolve(Layout), {ssr: false})
