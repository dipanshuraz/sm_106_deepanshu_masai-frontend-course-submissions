import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import Search from "../common/Search";
import Accordion from "./Accordion";

export class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false
    };
  }

  clickMe = () => {
    this.setState(previousState => {
      return {
        flag: !previousState.flag
      };
    });
  };

  render() {
    return (
      <>
        <div class="menu-wrap">
          <input
            type="checkbox"
            name=""
            class="toggler"
            onClick={this.clickMe}
            checked={this.state.flag}
            id=""
          />
          <div class="hamburger">
            <div class=""></div>
          </div>
          <div class="menu">
            <div class="">
              <div class="">
                <ul>
                  <li>
                    <Link onClick={this.clickMe} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Accordion />
                    <Link onClick={this.clickMe} to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>

                <Search />
                <td className="p-2">
                  <Link
                    onClick={this.clickMe}
                    style={{ textDecoration: "none" }}
                    to="/login"
                  >
                    <i class="fas fa-sign-in-alt mx-2"></i>
                    Log In
                  </Link>
                </td>
                <td className="p-2">
                  <Link
                    onClick={this.clickMe}
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    <i class="fas fa-user-plus mx-2"></i>
                    Create account
                  </Link>
                </td>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hamburger;
