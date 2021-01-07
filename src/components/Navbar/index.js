import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import Logo from '../../images/Blast-Logo.svg';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='Blast 825 Logo' />
          Blast 825°
        </NavLink>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
