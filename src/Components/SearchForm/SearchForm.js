import React, { Component } from 'react';
import "./_Searchform.scss";
import FormTable from './FormTable/FormTable.js';
import './FormTable/_FormTable.scss';

class SearchForm extends Component {
    constructor(props){
        super(props);

        this.state={
            selectedStation: 'ALL',
            departingStation: null,
            allStations: [],
            isLoading: true,
            arrival: "",
            departure: ""
        }

        this.getAllStations = this.getAllStations.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
        this.getAllStations();
        this.timingFunction = setInterval(() => this.getAllStations(), 111000);
    }
    

    async getAllStations(){
        try{

            const response = await fetch(`/base-station-routes`);
            let data = await response.json();     
            
            const bartData = Object.entries(data);
            this.setState({
                allStations: bartData,
                isLoading: false
            });
        }catch(e){
            console.log(`Error: ${e}`)
        }
        
    }

    /**
     * 
     * @param event
     * Handle change listens for an event  
     */
    handleChange(event){
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }


    render(){
       const { isLoading, allStations } = this.state;

        return(
            <div className="form__overall">
                <div className="form__container">
                    <div className="form__insideContainer">
                        <form className="form" onSubmit={this.handleSubmit}> 
                            <div className="form__header">
                                <h1>Bart and you're there</h1>
                            </div>
                            <div className="form__group">
                                <label htmlFor="arrival" className="form__label"> Departure </label>
                                <input 
                                    type="text" 
                                    name="departure" 
                                    className="form__input" 
                                    placeholder="Enter Departing Station..."
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form__group">
                                <label htmlFor="departure" className="form__label"> Arrival </label>
                                <input 
                                    type="text" 
                                    name="arrival" 
                                    className="form__input" 
                                    placeholder="Enter Arriving Station..."
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form__dateAndTimeParent">
                                <div className="form__dateAndTime">
                                    <label htmlFor="date" className="form__dateAndTime-label"> Date </label>
                                    <input 
                                        type="text" 
                                        name="date" 
                                        className="form__dateAndTime-input" 
                                        placeholder=" mm/dd "
                                    />
                                </div>
                                <div className="form__dateAndTime">
                                    <label htmlFor="date" className="form__dateAndTime-label"> Time </label>
                                    <input 
                                        type="text" 
                                        name="date" 
                                        className="form__dateAndTime-input" 
                                        placeholder=" 9:00 AM "
                                    />
                                </div>
                            </div>
                            <div className="form__tableParent">
                                { isLoading ? console.log("Loading") :
                                    <FormTable data = { allStations } />
                                }   
                            </div>
                            
                            <div className="form__btn">
                                <button className="form__searchBtn" type="submit">Search</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )  
    }
}


export default SearchForm;