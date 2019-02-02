import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <ul>
          {this.props.isAuthenticated ?
            <li><button onClick={this.props.onLogout}>Logout</button></li>
          :
          <li><button>Login</button></li>
          }
        </ul>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
