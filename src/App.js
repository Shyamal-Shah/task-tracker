import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  state = {};
  render() {
    return (
      <div
        className='border rounded m-3 p-3'
      >
        <Header title='Task Tracker'/>
      </div>
    );
  }
}

export default App;
