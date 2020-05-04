import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


import '../../styles/navbar.css'
const Header = () => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

  return (<div  className="fixed-top seven-navbar">
      <Navbar className="nav-text" expand="md">
        <NavbarBrand href="#home">SevenSight</NavbarBrand>
        <NavbarToggler onClick={toggle} >
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#time">Time</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#servicos">Serviços</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/clientes/">Clientes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contato">Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
   );
}

export default Header; 