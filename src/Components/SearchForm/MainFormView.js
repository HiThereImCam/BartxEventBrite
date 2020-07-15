// import React, { Component } from "react";
// // import axios from "axios";
// import "./_MainForm.scss";

// import SearchResults from "./SearchResults.js";

// class MainForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       departure: "",
//       arrival: "",
//       departureRes: []
//       // time: "",
//       // date: ""
//     };
//   }

//   updateState = newState => {
//     this.setState(newState);
//   };

//   componentDidUpdate(prevProp, prevState) {
//     const { departure, arrival } = this.state;
//     console.log(` Departure: ${departure}`, `Arrival: ${arrival}`);

//     // axios
//     //   .get("http://localhost:3001/route-submission", {
//     //     params: {
//     //       departure: departure,
//     //       arrival: arrival
//     //     }
//     //   })
//     //   .then(res => {
//     //     console.log(res);
//     //   });
//   }

//   render() {
//     const { arrival, departure } = this.state;

//     return (
//       <SearchResults
//         arrival={arrival}
//         departure={departure}
//         updateParentState={this.updateState}
//       />
//     );
//   }
// }

// export default MainForm;

// import React, { useState, useEffect } from "react";
// import SearchResults from "./SearchResults.js";
// import { Form, Field } from "react-final-form";
// import "./_MainForm.scss";

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

/* <div className="form__dateAndTimeParent">
              <Field
                name="date"
                placeholder="MM/DD"
                className="form__dateAndTime"
              >
                {({ input, placeholder }) => (
                  <div>
                    <label className="form__dateAndTime-label"> Date </label>
                    <input
                      {...input}
                      placeholder={placeholder}
                      className="form__dateAndTime-input"
                    />
                  </div>
                )}
              </Field> */

/* <Field
                name="time"
                placeholder="9:05 AM"
                className="form__dateAndTime"
              >
                {({ input, placeholder }) => (
                  <div>
                    <label className="form__dateAndTime-label"> Time </label>
                    <input
                      {...input}
                      placeholder={placeholder}
                      className="form__dateAndTime-input"
                    />
                  </div>
                )}
              </Field>
            </div>
            */
//}

/**
 *  React form will hold the state of the form
 *  Do not use React state to hold the form state
 *  We're going to pass the state to redux store
 *
 * Update 2/10
 *
 *  onSubmit(values) where values is an object with the submitted values
 */

// const onSubmit = values => <SearchResults values={values} />

// const MainForm = () => (
//   /**
//    * Need to decide what youre going to do on submit
//    */
//   <Form
//     onSubmit={onSubmit}
//     // component = { SearchResults }
//     className="form__container"
//     render={({ handleSubmit, form, submitting, values }) => (
//       <div className="form__insideContainer">
//         <div className="form__insideDisplay">
//           <form onSubmit={handleSubmit} className="form">
//             {/** HTML form */}
//             <div className="form__header">
//               <h1>Bart and you're there</h1>
//             </div>
//             <Field
//               name="departure"
//               placeholder="Departing Station"
//               className="form__group"
//             >
//               {/** destructuring Field state and using render prop */}
//               {({ input, placeholder }) => (
//                 <div>
//                   <label className="form__label"> Departure </label>
//                   <input
//                     {...input}
//                     type="text"
//                     placeholder={placeholder}
//                     className="form__input"
//                   />
//                 </div>
//               )}
//             </Field>
//             <Field
//               name="arrival"
//               placeholder="Arriving Station"
//               className="form__group"
//             >
//               {({ input, placeholder }) => (
//                 <div>
//                   <label className="form__label"> Arrival </label>
//                   <input
//                     {...input}
//                     placeholder={placeholder}
//                     className="form__input"
//                   />
//                 </div>
//               )}
//             </Field>

//             <div className="form__btn">
//               <button className="form__searchBtn" type="submit">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )}
//   />
// );

// function MainFormView() {
//   const [stationObj, setStation] = useState({});

//   /**
//    * Needs:
//    * 1.) submit function (what do you do with it)
//    * 2.) Typeahead (try to predict what the user is typing)
//    * 3.) Error submission
//    */

//   return (
//     <section>
//       <h1> Welcome! </h1>

//       {/** need to create div name for CSS */}
//       <div>
//         <div>
//           <Inputs stationObj = {setStation} />
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useReducer, useState } from "react";
import AutoComplete from "../Reusables/AutoComplete";

const initialState = {
  arrival: "",
  departure: ""
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value
  };
}

function MainFormView(props) {
  const { stationInfo } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { arrival, departure } = state;

  const handleInput = e => {
    const { name, value } = e.target;

    dispatch({
      field: name,
      value: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (departure === "" || arrival === "") {
      setIsEmpty(true);
    } else {
      setSubmitted(true);
    }
  };

  /**
   *
   * @param {*} input
   *
   * This function filters user input
   */
  let autoComplete = input => {
    return (
      <div className="dropDown__wrapper">
        <ul className="dropDown__list">
          {stationInfo
            .filter(
              stationName => stationName.indexOf(input.toLowerCase()) > -1
            )
            .map((currVal, i) => {
              return (
                <div className="dropDown__list-Item" key={i}>
                  {currVal}
                </div>
              );
            })}
        </ul>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="form__Header"> Welcome! </h1>
        <form className="form__Main" onSubmit={handleSubmit}>
          <h3> Where are we going today? </h3>

          <input
            placeholder="Enter departing station..."
            name="departure"
            value={departure}
            onChange={handleInput}
            className={`${
              isEmpty ? "form__Main-Input_Red" : "form__Main-Input"
            }`}
          />

          {isEmpty && <p> Needs departure </p>}

          {departure.length > 0 && autoComplete(departure)}

          <input
            placeholder="Enter arriving station..."
            name="arrival"
            value={arrival}
            onChange={handleInput}
            className={`${
              isEmpty ? "form__Main-Input_Red" : "form__Main-Input"
            }`}
          />
          {isEmpty && <p> Needs arrival </p>}

          <div>{arrival.length > 0 && autoComplete(arrival)}</div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

        <div>{submitted && <AutoComplete input={state} />}</div>
      </div>
    </div>
  );
}

export default MainFormView;
