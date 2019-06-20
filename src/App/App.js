import React, { Component } from 'react';
import './_App.scss';
import SearchForms from '../Components/SearchForm/SearchForm.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    }

  }
  
  render() {
    return (
      <div className="App">
          <SearchForms/>
      </div>
    );
  }
}

export default App;
