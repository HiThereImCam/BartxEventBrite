import React, { Component } from 'react';
import "./_SearchForm.scss";
const bartKey = process.env.REACT_APP_BART_API_KEY;



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
        this.getAllStations();
        this.timingFunction = setInterval(() => this.getAllStations(), 111000);
    }


    async getAllStations(){
        try{
            const response = await fetch(`http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${this.state.selectedStation}&key=${bartKey}&json=y`);
            // console.log(response.json());
            const data = await response.json();
            // const apiData = data.data.root;
            // console.log(`Here: ${apiData}`);
            this.setState({
                allStations: data.root.station
            })

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
                            {/*
                                Drop down calendar
                            */}
                            <input 
                                type="text" 
                                name="date" 
                                className="form__input-date" 
                                placeholder=" mm/dd "
                            />
                        </div>
                        <div className="form__group">
                            <label htmlFor="time" className="form__label"> Time </label>
                            {/*
                                Possibly a drop menu for the times
                             */}
                             <input 
                                type="text" 
                                name="date" 
                                className="form__input-time" 
                                placeholder="Time of departure"
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