import React, { Component } from 'react';
import './_App.scss';
import MainForm from '../SearchForm/MainForm.js';


class App extends Component {
  
  render() {
    return (
      <div className="App">
          <MainForm/>
      </div>
    );
  }
}

export default App;
