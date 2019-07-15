import React, { Component } from 'react';
import './_App.scss';
import Searchform from '../Components/SearchForm/Searchform.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    }

  }
  
  render() {
    return (
      <div className="App">
          <Searchform/>
      </div>
    );
  }
}

export default App;
