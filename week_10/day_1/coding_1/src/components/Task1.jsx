import React, { Component } from "react";
import store from "../redux/store";
import {
  incrementEvenOdd,
  multiplyby,
  divideby,
  remainder
} from "../redux/action";

export class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count2: ""
    };
  }
  handleChange = e => {
    this.setState({
      count2: e.target.value
    });
  };
  render() {
    return (
      <div>
        <h1>{store.getState().count2}</h1>
        <input
          value={this.state.count2}
          type="number"
          onChange={this.handleChange}
        />
        <button
          onClick={() => store.dispatch(incrementEvenOdd(this.state.count2))}
        >
          Increment
        </button>
        <button onClick={() => store.dispatch(multiplyby(this.state.count2))}>
          Multiply
        </button>
        <button onClick={() => store.dispatch(divideby(this.state.count2))}>
          Divide
        </button>
        <button onClick={() => store.dispatch(remainder(this.state.count2))}>
          Remainder
        </button>
      </div>
    );
  }
}

export default Task1;
