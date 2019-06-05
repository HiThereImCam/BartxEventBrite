import React, { Component } from 'react';
import './App.css';
import SearchForms from '../Components/SearchForm/SearchForm.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchForms/>
      </div>
    );
  }
}

export default App;
