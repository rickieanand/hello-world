import React, { Component } from 'react';
import Home from './home/Home'

class App extends Component {
  componentDidMount(){
    console.log('componentDidMount')

  }
  render() {
    return (
      <div className='supercontainer'>
        <div>hello</div>
        <Home />
      </div>
    );
  }
}

export default App;
