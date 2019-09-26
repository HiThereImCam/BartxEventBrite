import React, { Component, Fragment  } from 'react';
import axios from 'axios'; 
import "./_Form.scss";
import SearchForm from "./SearchForm.js";


class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            departure: "",
            arrival: ""
            // time: "",
            // date: ""
        }     
    }

    updateState = newState => {
        this.setState( newState )
    }

    componentDidUpdate( prevProp, prevState ){
        const { departure, arrival} = this.state;
        console.log(` Departure: ${ departure }`, `Arrival: ${ arrival }`);

        axios.get('http://localhost:3001/route-submission', {
            params: {
                departure: departure,
                arrival: arrival
            }  
        }).then( res => {
           console.log(res);
        })
    }

    render(){
       const {  arrival, departure } = this.state;
          
        return(
            <Fragment>
                <SearchForm
                    arrival = { arrival }
                    departure = { departure }
                    updateParentState = { this.updateState } 
                /> 
            </Fragment>
        )
    }
}


export default Form;


