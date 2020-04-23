import React, { Component } from "react";
import ShopCard from "../components/common/ShopCard";
import { Redirect } from "react-router-dom";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.card);
    return this.props.isAuth ? (
      <div className="container">
        <div className="row p-3">
          {this.props.card.map(elem => (
            <ShopCard img={elem.thumbnailUrl} id={elem.id} title={elem.title} />
          ))}
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Cart;
