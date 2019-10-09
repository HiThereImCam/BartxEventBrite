import React from 'react';
import { Form, Field } from 'react-final-form'
import "./_MainForm.scss";

// import SearchForm from "./SearchForm.js";

 // constructor(props){
    //     super(props);

    //     this.state = {
    //         departure: "",
    //         arrival: "",
    //         departureRes: []
    //         // time: "",
    //         // date: ""
    //     }     
    // }

    // updateState = newState => {
        
    //     let copiedState = Object.assign( {}, this.state );
    //     copiedState.departure = newState.data.departure; 

    //     this.setState({
    //         departureRes: copiedState.departure
    //     })
    // }

    // render(){
    //    const {  arrival, departure } = this.state;
          
    //     return(
    //         <Fragment>
    //             <SearchForm
    //                 arrival = { arrival }
    //                 departure = { departure }
    //                 updateParentState = { this.updateState } 
    //             /> 
    //         </Fragment>
    //     )
    // }


/**
 *  React form will hold the state of the form
 *  Do not use React state to hold the form state
 *  We're going to pass the state to redux store
 *  
 *  
 */


//  const test = ( values ) =>{
//      console.log( values )
//  }

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    console.log(JSON.stringify(values, 0, 2))
  }

const MainForm = () => (
   

    /**
     * Need to decide what youre going to do on submit
     */
    <Form 
        onSubmit = { onSubmit } 
        // component = { SearchResults }
        className="form__container" 
        render = {({ handleSubmit, form, submitting }) => (
            <div className="form__insideContainer">
                <div className="form__insideDisplay">
                    <form onSubmit={handleSubmit} className="form">
                        {/** HTML form */}
                        <div className="form__header">
                            <h1>Bart and you're there</h1>
                        </div>       
                        <Field name="departure" placeholder="Departing Station" className="form__group">
                            {/** destructuring Field state and using render prop */}
                            { ({ input, placeholder }) => (
                                <div >
                                    <label className="form__label"> Departure </label>
                                    <input 
                                        {...input}
                                        type="text"
                                        placeholder={placeholder}
                                        className="form__input"
                                    /> 
                                </div>
                            )}
                        </Field>
                        <Field name="arrival" placeholder="Arriving Station" className="form__group">
                            { ({ input, placeholder }) => (
                                <div >
                                    <label className="form__label"> Arrival </label>
                                    <input 
                                        {...input} 
                                        placeholder={placeholder}
                                        className="form__input"
                                    /> 
                                </div>
                            )}
                        </Field>
                        <div className="form__dateAndTimeParent">
                            <Field name="date" placeholder="MM/DD" className="form__dateAndTime">
                                { ({ input, placeholder }) => (
                                    <div >
                                        <label className="form__dateAndTime-label"> Date </label>
                                        <input 
                                            {...input} 
                                            placeholder={placeholder} 
                                            className="form__dateAndTime-input"
                                        /> 
                                    </div>
                                )}
                            </Field>
                            <Field name="time" placeholder="9:05 AM" className="form__dateAndTime">
                                { ({ input, placeholder }) => (
                                    <div >
                                        <label className="form__dateAndTime-label"> Time </label>
                                        <input 
                                            {...input} 
                                            placeholder={placeholder}
                                            className="form__dateAndTime-input"
                                        /> 
                                    </div>
                                )}
                            </Field>
                            <div className="form__btn">
                                <button className="form__searchBtn" type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        )}
    />
    

    
)


export default MainForm;


