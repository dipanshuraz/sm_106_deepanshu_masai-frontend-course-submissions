import React, { Component } from 'react'
import { Switch, Route, } from 'react-router-dom'
import Home from './Home'
import Login from './login'
import Register from './register'
import NoMatch from './NoMatch'
import NavBarPublic from './NavbarPublic'
import PrivateRoutes from './PrivateRoutes'
import { connect } from 'react-redux'
import { authUser } from '../redux/auth/action'

export class routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount = () => {
    const { authUser } = this.props
    authUser()
  }

  render() {
    return (
      <>
        <Route path="/" component={NavBarPublic} />
        <Switch>
          <PrivateRoutes exact path='/' component={Home} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
          <Route component={NoMatch} />
        </Switch>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.authReducer.user
})

const mapDispatchToProps = dispatch => ({
  authUser: () => dispatch(authUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(routes)
