import React from "react";
import logo from './logo.svg';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, NavbarText} from 'reactstrap';
export default function Demo(){
    return(
        <div>
     <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
    <img src={logo} className="App-logo" alt="logo" />
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Header
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
       Michale Jackson
      </NavbarText>
    </Collapse>
  </Navbar>

        </div>
    )
}