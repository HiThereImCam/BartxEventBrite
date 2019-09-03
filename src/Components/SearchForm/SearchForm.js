import React from 'react';
// import FormTable from './FormTable/FormTable.js';


class SearchForm extends React.Component{

   constructor(props){
    super(props)

    this.state = {
        arrival: "",
        departure: ""
    }
   }

    // handleChange(event){
    //     // this.setState({
    //     //     [event.target.name]: [event.target.value]
    //     // })

    //     this.props.inputChange(event.target.value);
    // }

    handleInput = e => {
        const { name, value } = e.target;
        console.log('Name: ', name);
        console.log('Value: ', value);

        this.setState({
            [name]: value
        })
    }

    handleSubmission = e => {
        e.preventDefault();
        console.log(`this state: `, this.state)
        this.props.updateParentState(this.state);
    }

    render(){

        const { arrival, departure } = this.state; 

        return(
            <div className="form__overall">
                    <div className="form__container">
                        <div className="form__insideContainer">
                            <form className="form" onSubmit={this.handleSubmission}> 
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
                                        value = { departure }
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form__group">
                                    <label htmlFor="departure" className="form__label"> Arrival </label>
                                    <input 
                                        type="text" 
                                        name="arrival" 
                                        className="form__input" 
                                        placeholder="Enter Arriving Station..."
                                        value = { arrival }
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form__dateAndTimeParent">
                                    <div className="form__dateAndTime">
                                        <label htmlFor="date" className="form__dateAndTime-label"> Date </label>
                                        <input 
                                            type="text" 
                                            name="date" 
                                            className="form__dateAndTime-input" 
                                            placeholder= "mm/dd "
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
                                {/* <div className="form__tableParent">
                                    { isLoading ? console.log("Loading") :
                                        <FormTable data = { baseStations } />
                                    }   
                                </div> */}
                                
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