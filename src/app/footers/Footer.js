import React, { Component } from 'react';

import logo from '../../svg/logo.svg';

import '../../css/footers/index.css';

class Footer extends Component {

  componentDidMount(){

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

export default Footer;
