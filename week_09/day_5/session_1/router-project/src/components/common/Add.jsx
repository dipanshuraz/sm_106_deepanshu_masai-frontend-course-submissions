import React, { Component } from "react";

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  addDataToCard = () => {
    if (!this.props.isAuth) {
      this.props.history.push("/login");
    } else {
      var title = this.props.match.params.add;
      // console.log(this.props.match.params.add);
      var item = this.props.data.filter(elem => {
        return elem.title == title;
      });
      // console.log(title);
      this.setState({ data: item });
      console.log(item);
      this.props.addToCart(item);
    }
  };

  render() {
    // console.log()
    // console.log(this.state.data);

    // console.log(this.props);
    return (
      <div>
        <h1>Add Component</h1>
        <button onClick={this.addDataToCard}>Add to Cart</button>
      </div>
    );
  }
}

export default Add;
