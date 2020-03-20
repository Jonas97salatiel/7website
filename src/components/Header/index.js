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

<<<<<<< HEAD
const Header = () => {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
=======

import '../../styles/navbar.css'

const Header = () => {
   
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

>>>>>>> 39c38ac060a4562167753590af8f6a073402fa42

  return (<div  className="seven-navbar">
      <Navbar className="nav-text" expand="md">
        <NavbarBrand href="/">SevenSight</NavbarBrand>
        <NavbarToggler onClick={toggle} >
        <i class="fab fa-buffer fa-2x"></i>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/sobre/">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/time/">Time</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/servicos/">Serviços</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/clientes/">Clientes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contato/">Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
   );
}

export default Header; 