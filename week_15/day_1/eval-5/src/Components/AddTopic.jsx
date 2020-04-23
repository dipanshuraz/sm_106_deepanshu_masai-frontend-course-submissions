import React, { Component } from "react";
import { connect } from "react-redux";
import { addTopic } from "../Redux/action";
import { Redirect } from "react-router-dom";

export class AddTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      cat: "",
      user: "",
      // date: Date.now()
      date: new Date().toLocaleDateString()
    };
  }

  inputHandlerTitle = e => {
    this.setState({ title: e.target.value });
  };
  inputHandlerBody = e => {
    this.setState({
      body: e.target.value
    });
  };
  inputHandlerCat = e => {
    this.setState({ cat: e.target.value });
  };
  inputHandlerUser = e => {
    this.setState({ user: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    this.props.addTopic(this.state);
  };

  render() {
    return (
      <div className="container w-50 my-5">
        {this.props.isAuth ? (
          <form action="">
            <div className="form-group">
              <label htmlFor="">Title</label>
              <input
                className="form-control"
                type="text"
                value={this.state.title}
                onChange={this.inputHandlerTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Body</label>
              <input
                className="form-control"
                type="text"
                value={this.state.body}
                onChange={this.inputHandlerBody}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Category</label>
              <select
                className="form-control"
                name=""
                id=""
                value={this.state.cat}
                onChange={this.inputHandlerCat}
              >
                <option value="#">Select Cat</option>
                <option value="random">random</option>
                <option value="general">General</option>
                <option value="programming">Programming</option>
                <option value="algorithm">Algorithms</option>
                <option value="suggestions">Suggestions</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">User Details</label>
              <input
                className="form-control"
                type="text"
                value={this.state.user}
                onChange={this.inputHandlerUser}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                class="btn btn-outline-dark"
                onClick={this.submitForm}
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <Redirect to="/Login" />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTopic: payload => dispatch(addTopic(payload))
});

export default connect(null, mapDispatchToProps)(AddTopic);
