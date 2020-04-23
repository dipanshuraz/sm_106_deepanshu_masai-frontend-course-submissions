/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarPublic.module.css";

const NavBar = ({ location: { pathname } }) => {
  if (pathname.startsWith("/dash")) return null;
  return (
    <div className={styles.navLinks}>
      <Link to="/dash">
        <i class="fa-3x fas fa-shopping-cart p-1"></i>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default NavBar;
