import React, { Component } from "react";
import "../../index.css";
import { connect } from "react-redux";
import { addProd } from "../../redux/admin/action";

export class AddProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: "",
      name: "",
      price: "",
      unit: ""
    };
  }

  addItem = e => {
    e.preventDefault();
    const { addProd } = this.props;
    addProd(this.state);
  };

  handleInputs = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container-fluid bg-svg4">
        <div className="container">
          <div className="row">
            <h1 className="text-center w-100 pt-5">Add Products</h1>
            <div className="col-md-8">
              <form>
                <div className="form-group">
                  <label>Choose Category</label>
                  <select
                    class="form-control"
                    name="cat"
                    id=""
                    onChange={this.handleInputs}
                    value={this.state.cat}
                  >
                    <option value="">Choose Category</option>
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="cleaning">Cleaning & Hygiene</option>
                    <option value="dairy">Dairy</option>
                    <option value="pet">Pet Care</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={this.handleInputs}
                    value={this.state.name}
                  />
                </div>

                <div class="form-group">
                  <label>Price </label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={this.handleInputs}
                    value={this.state.price}
                    name="price"
                  />
                </div>
                <div className="form-group">
                  <label>Choose Unit</label>
                  <select
                    name="unit"
                    id=""
                    onChange={this.handleInputs}
                    value={this.state.unit}
                    class="form-control"
                  >
                    <option value="">select Units</option>
                    <option value="kg">Kilogram</option>
                    <option value="piece">Piece</option>
                    <option value="ltr">Litres</option>
                  </select>
                </div>
                <button
                  onClick={this.addItem}
                  type="submit"
                  class="btn btn-success"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addProd: payload => dispatch(addProd(payload))
});

export default connect(null, mapDispatchToProps)(AddProducts);
