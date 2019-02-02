import React, { Component } from 'react';
import {connect} from 'react-redux';

import Auth from '../Auth';
import Product from '../Product';
import Header from '../../components/Header';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    let element = <Auth />;
    if(this.props.isAuthenticated) {
      element = <Product />;
    }
    return (
      <div className="App">
        <Header />
        <main>
          {element}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(App);
