import React, { Component } from "react";
import CartTable from "./CartTable";

class CartForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      desc: "",
      cat: "",
      price: "",
      total: "",
      data: []
    };
  }
  nameInputHandler = e => {
    this.setState({
      name: e.target.value
    });
  };
  descInputHandler = e => {
    this.setState({
      desc: e.target.value
    });
  };
  catInputHandler = e => {
    this.setState({
      cat: e.target.value
    });
  };
  priceInputHandler = e => {
    this.setState({
      price: e.target.value
    });
  };

  addItems = e => {
    e.preventDefault();
    let item = {
      name: this.state.name,
      desc: this.state.desc,
      cat: this.state.cat,
      price: this.state.price
    };
    this.state.data.push(item);
    // console.log(this.state.data);
  };
  render() {
    return (
      <div className="container justify-content-center p-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              value={this.state.name}
              onChange={this.nameInputHandler}
              type="text"
              class="form-control"
              id="nameInput"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input
              type="password"
              value={this.state.desc}
              onChange={this.descInputHandler}
              class="form-control"
              id="descInput"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Category</label>
            <select
              class="form-control"
              value={this.state.cat}
              onChange={this.catInputHandler}
              id="catInput"
            >
              <option>Toys</option>
              <option>Game</option>
              <option>Drink</option>
              <option>Gadgets</option>
              <option>Tools</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Price</label>
            <input
              type="text"
              value={this.state.price}
              onChange={this.priceInputHandler}
              class="form-control"
              id="priceInput"
            ></input>
          </div>

          {
            <button
              onClick={this.addItems}
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          }
        </form>
        <CartTable itemsData={this.state.data} />
      </div>
    );
  }
}

export default CartForm;
