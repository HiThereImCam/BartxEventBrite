import React, { Component } from 'react';
import "./_SearchForm.scss";

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
            const response = await fetch(`/base-station-routes`);
            const data = await response.json();           

            console.log(data);
            // this.setState({
            //     allStations: data.root.station
            // })


            /**
             * Goal: 
             * The data is going to get passed from the backend
             * 1.) Get passed an Object of arrays which contain all of the data
             * 2.) Set the data to allStations
             * this.setState({
             *      allStations: data
             * })
             */

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