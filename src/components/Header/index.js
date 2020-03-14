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


  return (<div  className="seven-navbar">
      <Navbar className="nav-text" expand="md">
        <NavbarBrand href="/">7Sight</NavbarBrand>
        <NavbarToggler color onClick={toggle} />
        <Collapse   className="togg-cor"isOpen={isOpen} navbar>
          </Collapse>
          </Navbar>
          </div>
   );
}

export default Header; 