import React, { Component } from "react";
import store from "../redux/store";
import { incrementCounter, decrementCounter } from "../redux/action";

export class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleChange = e => {
    this.setState({
      count: e.target.value
    });
  };
  render() {
    // console.log(store.getState().count);

    return (
      <div>
        <h1>{store.getState().count}</h1>
        <input
          value={this.state.count}
          type="number"
          onChange={this.handleChange}
        />
        <button
          onClick={() => store.dispatch(incrementCounter(this.state.count))}
          type="submit"
        >
          Increment
        </button>
        <button
          onClick={() => store.dispatch(decrementCounter(this.state.count))}
          type="submit"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Task;
