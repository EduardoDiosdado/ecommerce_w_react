import React from "react";
import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";
import "./styles.scss";


function CartIcon() {
  return (
    <>
      <a className="mx-3" href="#!">
        <MDBIcon fas icon="shopping-cart" size="lg" className="cartIcon" />
        <MDBBadge color="danger" notification pill>
          1
        </MDBBadge>
      </a>
    </>
  );
}

export default CartIcon