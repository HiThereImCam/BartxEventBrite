import React, { Component } from 'react';
import "./_Form.scss";
import SearchForm from "./SearchForm.js";


class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            // selectedStation: 'ALL',
            // departingStation: null,
                // baseStations: [],
                // isLoading: true,
            arrival: "",
            departure: "",
            time: "",
            date: ""
        }

        // this.getBaseStations = this.getBaseStations.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    // componentDidMount(){
    //     this.getBaseStations();
    //     this.timingFunction = setInterval(() => this.getBaseStations(), 111000);
    // }
    

    // async getBaseStations(){
    //     try{

    //         const response = await fetch(`/base-station-routes`);
    //         let data = await response.json();     
            
    //         const bartData = Object.entries(data);
    //         this.setState({
    //             allStations: bartData,
    //             isLoading: false
    //         });
    //     }catch(e){
    //         console.log(`Error: ${e}`)
    //     }
        
    // }

    updateState = newState => {
        this.state({ newState })
    }

    componentDidUpdate(prevProps, prevState){
        const { arrival, departure } = this.state;
        console.log(`Arrival: ${ arrival }`, `Departure: ${ departure }`)
    }

    render(){
    //    const {  arrival, departure } = this.state;
          const { updateState } = this.state;
        return(
            <SearchForm
                // isLoading = {isLoading}
                // baseStations = {baseStations}
                // arrival = {arrival}
                // departure = {departure}
                updateParentState = { updateState }
            />
        )
    }
}


export default Form;


