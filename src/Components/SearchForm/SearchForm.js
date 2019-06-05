import React, { Component } from './node_modules/react';
import "./_SearchForm.scss";
const bartKey = process.env.REACT_API_BART_API_KEY;

//http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${this.state.stationAbbv}&key=${bartKey}&json=y

class SearchForm extends Component {
    constructor(props){
        super(props);

        this.state={
            selectedStation: 'ALL',
            departingStation: null,
            allStations: {}
        }

        this.getAllStations = this.getAllStations.bind(this);
    }

    componentDidMount(){
        this.timingFunction = setInterval(() => this.getAllStations(), 1000);
    }


    async getAllStations(){
        try{
            const response = await(`http:api.bart.gov/api/etd.aspx?cmd=etd&orig=${this.state.selectedStation}&key=${bartKey}&json=y`);
            const data = await response.json();
            console.log(`Here: ${data}`);


            // fetch(`http:api.bart.gov/api/etd.aspx?cmd=etd&orig=${this.state.selectedStation}&key=${bartKey}&json=y`)
            //     .then(response => response.json())
            //     console.log(response);
    
        }catch(e){
            console.log(`Error: ${e}`)
        }
        
    }
    render(){
        return(

            <div className = "form__row">
                <div className="form">
                    <form action="#" className="form__container">
                        <div className="form__header">
                            <h1>Bart and you're there</h1>
                        </div>
                        <div className="form__group">
                            <label htmlFor="arrival" className="form__label"> Arrival </label>
                            <input 
                                type="text" 
                                name="arrival" 
                                className="form__input" 
                                placeholder="Enter Arriving Station..."
                            />
                        </div>
                        <div className="form__group">
                            <label htmlFor="departure" className="form__label"> Departure </label>
                            <input 
                                type="text" 
                                name="departure" 
                                className="form__input" 
                                placeholder="Enter Departing Station..."
                            />
                        </div>
                        <div className="form__group">
                            <label htmlFor="date" className="form__label"> Date </label>
                            <input 
                                type="text" 
                                name="date" 
                                className="form__input-date" 
                                placeholder=" mm/dd "
                            />
                        </div>
                        <div className="form__group--btn">
                            <button className="form__group--search-btn" type="submit">Search</button>
                        </div>
                    </form> 
                </div>
            </div>
        )  
    }
}


export default SearchForm;