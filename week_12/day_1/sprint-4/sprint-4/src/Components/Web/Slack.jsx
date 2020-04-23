import React, { Component } from "react";
import Nav from "./components/nav";
import Banner from "./components/banner";
import Break from "./components/break";
import Card1 from "./components/Card1";
import Corosel from "./components/corosel";
import Bottom from "./components/bottom";
class Slack extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <Break />
        <Card1 />
        <hr />
        <Corosel />

        <Bottom />
      </div>
    );
  }
}

export default Slack;
