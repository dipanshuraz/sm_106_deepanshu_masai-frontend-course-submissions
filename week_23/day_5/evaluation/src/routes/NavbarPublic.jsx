import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

export class NavbarPublic extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { isAuth } = this.props
    return (
      <div className='d-flex justify-content-around my-5'>
        <Link className='h5 text-dark ' style={{ textDecoration: 'none' }} to="/">Home</Link>
        <Link className='h5 text-dark ' style={{ textDecoration: 'none' }} to="/login">Login</Link>
        <Link className='h5 text-dark ' style={{ textDecoration: 'none' }} to="/register">Register</Link>
      </div >
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth
})


export default connect(mapStateToProps, null)(NavbarPublic)
