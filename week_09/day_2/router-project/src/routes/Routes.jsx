import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Hamburger from "../components/common/Hamburger";
import "../App.css";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import FAQ from "./Faq";
import About from "./About";
import axios from "axios";
import Cart from "./Cart";

export class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    axios
      .get("./data.json")
      .then(res => {
        this.setState({
          data: res.data
        });
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const Footer = () => {
      return (
        <div className="container">
          <div className="row ">
            <div className="col-md-12 d-flex justify-content-center ">
              <ul className="inline d-flex align-items-center">
                <li>
                  <Link style={{ textDecoration: "none" }} exact to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/faq">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-around p-3">
            <div className="icons-social">
              <Link style={{ textDecoration: "none" }} to="/">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/">
                <i class="fab fa-twitter"></i>
              </Link>
            </div>
            <div className="">
              <p>Copyright © 2020 Masai</p>
            </div>
          </div>
        </div>
      );
    };
    return (
      <>
        <div className="container ">
          <div className="row  justify-content-around">
            <div className="">
              <Hamburger />
            </div>
            <div className="">
              <img
                src="https://cdn.shopify.com/s/files/1/0112/3682/files/SoWorthLoving-70Logo-DiamondOnly-Blk-Transparent_x50.png?v=1556076203"
                className="img-fluid m-2"
                width="50px"
                alt=""
              />
            </div>
            <div className="">
              <Link to="/cart">
                <img
                  src="https://img.icons8.com/ios/1000/000000/shopping-mall.png"
                  width="40px"
                  className="m-2"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <Route path="/" exact component={Home} />
        <Route
          path="/shop"
          component={props => <Shop {...props} data={this.state.data} />}
        />
        <Route path="/faq" component={FAQ} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Footer />
      </>
    );
  }
}

export default Routes;
