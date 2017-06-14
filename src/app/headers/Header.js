import React, { Component } from 'react';

import logo from '../../svg/logo.svg';

import '../../css/headers/index.css';

class Header extends Component {

  componentDidMount(){
      console.log('Header componentDidMount called')

  }
  render() {
    console.log('state',this.state)
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
    );
  }
}

export default Header;
