import styled from 'styled-components';

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
`;

export const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #333;
  margin-left: 20px;
  text-decoration: none;
  &:hover {
    color: #666;
  }
`;

export const Footer = styled.footer`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;