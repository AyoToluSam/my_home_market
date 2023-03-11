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
  background-color: #f2f2f2;
  padding: 2rem;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.04);

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
  font-weight: bold;

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