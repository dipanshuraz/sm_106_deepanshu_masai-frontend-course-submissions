import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/dash">
        <i class="fa-3x fas fa-shopping-cart p-1"></i>
      </Link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="d-flex mt-3 justify-content-around w-100">
          <li>
            <Link className="d-block" to="/dash">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="d-block" to="/dash/addproducts">
              Add Products
            </Link>
          </li>
          <li>
            <Link className="d-block" to="/">
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
