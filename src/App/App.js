import React, { Component } from 'react';
import './_App.scss';
import SearchForms from '../Components/SearchForm/SearchForm.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null
    }

    this.callBackendAPI = this.callBackendAPI.bind(this);

  }

  componentDidMount(){
    this.callBackendAPI()
      .then(res => this.setState({
        data: res.express
      }))
      .catch(err => console.log(err))
  }

  async callBackendAPI(){
    const response = await fetch('http://localhost:3001/');
    const body = await response.json();

    if(response.status !== 200){
      throw Error(body.message)
    }

    return body;
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
