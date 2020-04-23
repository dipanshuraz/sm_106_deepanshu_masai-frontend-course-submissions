import React, { Component } from "react";
import Table from "./Table";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ViewTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(props) {
    console.log(this.props.isAuth);
    return (
      <div>{this.props.isAuth ? <Table /> : <Redirect to="/Login" />}</div>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.isAuth
});

export default connect(mapStateToProps, null)(ViewTopics);
