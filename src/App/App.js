import React, { Component } from 'react';
import './_App.scss';
import Form from '../Components/SearchForm/Form.js';


class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Form/>
      </div>
    );
  }
}

export default App;
