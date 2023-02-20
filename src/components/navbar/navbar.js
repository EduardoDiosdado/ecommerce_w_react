import React, { useState } from "react";
import CartIcon from "../cartWidget/cart";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
//Importing image as webpack need to compile
import logo from "../../assets/images/Diosdados.svg";
import "./styles.scss";

function Nav() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={logo}  alt="" height="100vh"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current="page" href="#">
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href="#">Features</MDBNavbarLink>
            <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
            <MDBNavbarLink disabled href="#" tabIndex={-1} aria-disabled="true">
              Disabled
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
        <CartIcon />
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Nav;
