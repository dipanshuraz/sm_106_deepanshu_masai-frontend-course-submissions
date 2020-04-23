import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ShopCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  addCart = e => {
    e.preventDefault();
    // alert(e.target.value + "Hello");
  };

  render() {
    // console.log(this.props);
    // console.log(this.props.isAuth);
    return (
      <>
        <div className="col-md-3">
          <div class="">
            <img
              class="card-img-top"
              src={this.props.img}
              className="img-fluid"
              alt="Card image cap"
            ></img>
            <div class="card-body">
              <h5 class="card-title">Demo Text</h5>
              <p class="card-text">{this.props.title}</p>
              <p class="card-text">
                <small class="text-muted">Colors Available</small>
              </p>
              <p>Price : {this.props.price}</p>
              <Link to={`/shop/${this.props.title}`}>Add</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShopCard;
