import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import Logo from '../../images/logo.jpg';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='Blast 825 Logo' />
        </NavLink>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
