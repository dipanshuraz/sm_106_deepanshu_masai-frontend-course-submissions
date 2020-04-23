import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "./Dashboard/NavBar";
import AddProducts from "./Dashboard/AddProducts";
import Dashboard from "./Dashboard/Dashboard";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route path="/dash" render={NavBar} />
      <Route path="/dash" exact render={() => <Dashboard />} />
      <Route path="/dash/addproducts" render={() => <AddProducts />} />
    </>
  ) : (
    <Redirect to="/login" />
  );
};

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(DashboardRoutes);
