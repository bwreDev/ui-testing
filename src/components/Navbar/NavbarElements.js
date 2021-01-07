import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  padding: 10px;
  display: flex;
  justify-content: static;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  font-family: 'Six Caps', sans-serif;
  text-decoration: none;
  color: #fff;
  font-size: clamp(2.5rem, 10vw, 5rem);
`;

export const NavIcon = styled.div`
  display: block;
  position: fixed;
  top: 15px;
  right: 0;
  cursor: pointer;
  color: #fff;
`;

export const Bars = styled(FaBeer)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
