import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoutes = ({ component: Component, isAuth, ...rest }) => {
  console.log(isAuth);
  return isAuth ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
      <Redirect to="/login" />
    );
};
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,

});

export default connect(mapStateToProps, {})(PrivateRoutes);
