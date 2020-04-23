import React, { Component } from "react";
import { Input, Button } from "antd";
import {
  addTodo,
  completeTodo,
  trashTodo,
  completeToTrash,
  allClear
} from "../redux/action";
import { connect } from "react-redux";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItem: ""
    };
  }
  handleChange = e => {
    this.setState({ todoItem: e.target.value });
  };

  render() {
    let total = this.props.completeTodo1.length;
    console.log(total);
    // console.log(this.props.todoArr);
    // console.log(this.props.completeTodo1);
    // console.log(this.props.trashTodo1);
    // console.log(store.getState().todoArr);
    return (
      <div className="container my-5 px-3">
        <div className="row">
          <div className="col-md-12 text-center p-5 border">
            <h5 className="lead text-dark">Todo</h5>
            <Input
              onChange={this.handleChange}
              value={this.state.todoItem}
              placeholder="Todo"
            />
            <Button
              type="primary"
              onClick={() => {
                this.props.addTodo(this.state.todoItem);
                this.setState({
                  todoItem: ""
                });
              }}
              className="my-2"
              block
            >
              Add
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 border my-2">
            <p className="text-dark text-center">Todo Task</p>
            <ul style={{ listStyle: "none" }}>
              {this.props.todoArr.map((elem, i) => {
                return (
                  <li key={i + 1} className="d-flex justify-content-between">
                    <span>
                      <span className="mr-3">{i + 1}</span>
                      <span>{elem}</span>
                    </span>
                    <span>
                      <span className="px-1">
                        <button onClick={() => this.props.completeTodo(i)}>
                          +
                        </button>
                      </span>
                      <span className="px-1">
                        <button onClick={() => this.props.trashTodo(i)}>
                          x
                        </button>
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6 border my-2">
            <p className="text-dark text-center">Completed</p>
            <p>Total : {total}</p>
            <ul>
              {this.props.completeTodo1.map((elem, i) => {
                return (
                  <li key={i + 1}>
                    <span>
                      <span>{i + 1}</span>
                      <span>{elem}</span>
                    </span>
                    <span>
                      <span className="px-1">
                        <button onClick={() => this.props.completeToTrash(i)}>
                          x
                        </button>
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6 offset-md-3 border my-2">
            <tr>
              <td>
                <p className="text-dark text-center">Trash</p>
              </td>
              <td>
                <button onClick={() => this.props.allClear()}>X</button>
              </td>
            </tr>
            <ul>
              {this.props.trashTodo &&
                this.props.trashTodo1.map((elem, i) => {
                  return (
                    <li key={i + 1}>
                      <span>
                        <span>{i + 1}</span>
                        <span>{elem}</span>
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoArr: state.todoArr,
  completeTodo1: state.completeTodo,
  trashTodo1: state.trashTodo
});

const mapDispatchToProps = dispatch => ({
  addTodo: payload => dispatch(addTodo(payload)),
  completeTodo: payload => dispatch(completeTodo(payload)),
  trashTodo: payload => dispatch(trashTodo(payload)),
  completeToTrash: payload => dispatch(completeToTrash(payload)),
  allClear: payload => dispatch(allClear(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
