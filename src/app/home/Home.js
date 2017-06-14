import React, { Component } from 'react';
import Header from '../headers/Header';
import Footer from '../footers/Footer';
//import '../css/home/index.css';

class Home extends Component {

  componentDidMount(){
    console.log('call')
    
  }

  render() {
    console.log('Home render')
    return (
      <div className="home">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }

}

export default Home;
