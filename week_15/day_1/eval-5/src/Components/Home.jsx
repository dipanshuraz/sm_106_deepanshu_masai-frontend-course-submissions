import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          class: "col-md-6",
          head: "ADD A NEW TOPIC",
          color: "primary",
          btn: "ADD TOPIC",
          path: "/add"
        },
        {
          class: "col-md-6 ",
          head: "VIEW TOPICS",
          color: "primary",
          btn: "VIEW TOPICS",
          path: "/view"
        }
      ]
    };
  }

  render() {
    return (
      <>
        {this.state.data.map(elem => {
          return (
            <div className="col-md-6 m-5 p-5">
              <div className="{elem.class}">
                <h1>{elem.head}</h1>
                <Link to={elem.path}>
                  <Button
                    variant="contained"
                    className="px-3 py-2"
                    color={elem.color}
                  >
                    {elem.btn}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Home;
