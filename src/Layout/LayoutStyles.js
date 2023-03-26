import styled from 'styled-components';

export const BodyContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #fff; 
  padding: 2rem;
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
    transition: 0.5s linear;

    &:hover {
      transform: translate(0, -20%);
      transition: 0.5s linear;
    }
  }

  .active {
    text-decoration: none;
    font-weight: 600;
    padding: 1rem 0;
    border-bottom: 2px solid #000;
    transition: 0.5s linear;

    &:hover {
      transform: translate(0, -10%);
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
  justify-content: center;
  padding: 0.6rem;
  border: 1px solid black;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: #666;
    border: 1px solid #666;
  }
`;

export const ItemCount = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: darkred;
  width: 1.4rem;
  height: 1.4rem;
  padding: 0.6rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 50%;
  transform: translate(37.5%, 37.5%);
`;


export const Footer = styled.footer`
  padding: 2rem;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;