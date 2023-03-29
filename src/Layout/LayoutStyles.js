import styled from 'styled-components';

export const BodyContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.header`
  position: sticky;
  z-index: 9;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #fff; 
  padding: 2rem 3rem;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.04);

  .cart {
    cursor: pointer;
  }

  @media screen and (max-width: 680px) {
    
  }
`;

export const LogoNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Logo = styled.img`
  max-width: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 680px) {
    display: none;
  }

  .navLink {
    text-decoration: none;
    font-weight: 400;
    transition: 0.5s linear;

    &:hover {
      transform: scale(1.1);
      transition: 0.5s linear;
    }
  }

  .active {
    text-decoration: none;
    font-weight: 600;
    padding: 0.8rem 0;
    border-bottom: 1.5px solid #000;
    transition: 0.5s linear;

    &:hover {
      transform: scale(1.1);
      transition: 0.5s linear;
    }
  }
`;

export const SmallScreen = styled.div`

  position: relative;
  display: none;

  @media screen and (max-width: 680px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: bold;
    background-color: transparent;
  }

  .dropdown {
    font-size: 1.8rem;
  }
  
  ul {
    position: absolute;
    min-width: max-content;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 6px;
    bottom: -3rem;
    right: -5rem;
    display: flex;
    gap: 1rem;
    padding: 0.5rem;

    li {
      list-style: none;
      cursor: pointer;

      &:hover {
        color: #ccc;
      }
    }
  }
`;

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem;
  background: transparent;
  cursor: pointer;
  transition: 0.3s linear;
  
  &:hover {
    transform: scale(1.1);
    transition: 0.3s linear;
  }
`;

export const ItemCount = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: darkred;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 50%;
  transform: translate(-12.5%, -12.5%);
`;


export const Footer = styled.footer`
  padding: 3rem 3rem 1.5rem;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #000;
  color: #fff;
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
`;

export const Customer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h3 {
    font-size: 12px;
    font-weight: 700;
  }

  p{
    font-size: 12px;
    font-weight: 300;
  }

  span {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Contact = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h3 {
    font-size: 12px;
    font-weight: 700;
  }

  p{
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
  }
`;

export const Payments = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 12px;
    font-weight: 700;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.8rem;

    img {
      max-width: 80px;
      margin: auto 0;

      &:nth-child(2) {
        width: 28px;
      }
      &:nth-child(3) {
        width: 60px;
      }
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 200;
  display: flex;
  justify-content: center;
`;






