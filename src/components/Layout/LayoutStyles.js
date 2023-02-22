import styled from 'styled-components';

export const BodyContainer = styled.div`
  /* max-width: 1280px;
  margin: 0 auto;
  overflow: auto; */
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #f2f2f2;
  padding: 0 20px;

  .cart {
    cursor: pointer;
  }
`;

export const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  .navLink {
    color: #333;
    margin-left: 20px;
    text-decoration: none;
    &:hover {
      color: #666;
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
  height: 100px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;