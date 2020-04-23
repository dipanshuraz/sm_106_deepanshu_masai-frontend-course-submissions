import React, { Component } from "react";
import CartTable from "./CartTable";
import CartForm from "./CartForm";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div>{<CartForm />}</div>;
  }
}

export default Cart;
