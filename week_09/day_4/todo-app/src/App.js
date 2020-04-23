import React, { Component } from "react";
import "./App.css";
import Add from "./components/add";
import Todo from "./components/todo";
import { Container, Button } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      showCompleted: false
    };
  }
  handleAdd = itemName => {
    var item = {
      name: itemName,
      isDone: false
    };
    this.setState({
      todo: [...this.state.todo, item]
    });
  };

  toggleDone = name => {
    this.setState({
      todo: this.state.todo.map((item, i) =>
        item.name === name ? { ...item, isDone: !item.isDone } : item
      )
    });
  };

  handleDel = name => {
    this.setState({
      todo: this.state.todo.filter((item, i) => item.name !== name)
    });
  };

  render() {
    console.log(this.state.todo);
    return (
      <Container>
        TODO APP
        <Add add={this.handleAdd} />
        <Todo
          data={this.state.todo}
          toggleDone={this.toggleDone}
          label="TODO"
          del={this.handleDel}
        />
        <Button
          variant="outline"
          color="primary"
          onClick={() =>
            this.setState({ showCompleted: !this.state.showCompleted })
          }
        >
          SHOW COMPLETED TODO
        </Button>
        {this.state.showCompleted && (
          <Todo
            data={this.state.todo.filter(a => a.isDone)}
            toggleDone={this.toggleDone}
            label="COMPLETE"
            del={this.handleDel}
          />
        )}
      </Container>
    );
  }
}

export default App;
