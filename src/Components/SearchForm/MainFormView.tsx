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

// const initialState = {
//   arrival: "",
//   departure: ""
// };

// function reducer(state, { field, value }) {
//   return {
//     ...state,
//     [field]: value
//   };
// }

import React, { useState } from "react";
import { AxiosResponse } from "axios";
import submitStationInfo from "../../util/submitStationInfo";

import TravelResults from "../TravelResults/TravelResults";
import Input from "../Input/Input";

export type StationInfoProps = {
  abbr: string;
  name: string;
};

export const MainFormView = (props: { stationInfo: StationInfoProps[] }) => {
  // const [stations, setStations] = useState<Array<StationInfoProps>>([]);
  const [submitted, setSubmitted] = useState(false);
  const [travelInfo, setTravelInfo] = useState<AxiosResponse | undefined>();

  const { stationInfo } = props;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // {departure: val, destination: val}
    const formEntries = Object.fromEntries(formData.entries());

    const departure = formEntries["departure"];
    const destination = formEntries["destination"];

    if (destination && departure) {
      let travelResponse = await submitStationInfo(
        [departure, destination],
        stationInfo
      );
      if (travelResponse) {
        setTravelInfo(travelResponse);
        setSubmitted(true);
      }
    }
  };

  return (
    <div className="section-child">
      <div className="container">
        <div className="form-container">
          {submitted && travelInfo ? (
            <TravelResults travelInfo={travelInfo} />
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form__Header">
                <h3>Where are we going today?</h3>
              </div>
              <div className="form__Wrapper">
                <h3>From</h3>
                <Input
                  name={"departure"}
                  stationInfo={stationInfo}
                  wasSubmitted={submitted}
                />
                <h3>To</h3>
                <Input
                  name={"destination"}
                  stationInfo={stationInfo}
                  wasSubmitted={submitted}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="button-container__Button">
                  Find trains
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * The problem:
 *  I want to be able to display certain errors based on
 *  whether or not arrival/departure has the correct values
 */

// } else if (departure === "" && arrival === "") {
//   setTravelState({
//     arrivalEmpty: true,
//     departureEmpty: true
//   });
// } else if (arrival === "") {
//   setTravelState({ arrivalEmpty: true });
// } else {
//   setTravelState({ departureEmpty: true });
// }

// const handleClick = e => {};

/**
 *
 * @param {*} input
 *
 * This function filters user input
 */
// let dropDown = input => {
//   return (
//     <div className="dropDown__wrapper">
//       <ul className="dropDown__list">
//         {stationInfo
//           .filter(
//             stationName => stationName.indexOf(input.toLowerCase()) > -1
//           )
//           .map((currVal, i) => {
//             return (
//               <div className="dropDown__list-Item">
//                 <li key={i} onClick={handleClick}>
//                   {console.log("currVal", currVal)}
//                   {currVal}
//                 </li>
//               </div>
//             );
//           })}
//       </ul>
//     </div>
//   );
// };

/**
 const { stationInfo } = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const [arrivalEmpty, setArrivalEmpty] = useState(false);
  const [departureEmpty, setDepartureEmpty] = useState(false);
  const { arrival, departure } = state;

  const handleInput = e => {
    const { name, value } = e.target;

    dispatch({
      field: name,
      value: value
    });
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
            list={"stations"}
            autoComplete="off"
            className={`${
              departureEmpty ? "form__Main-Input_Red" : "form__Main-Input"
            }`}
          />
          <datalist id="stations">
            {stationInfo.map(station => (
              <option key={station.abbr} value={station.name} />
            ))}
          </datalist>

          departureEmpty && <p> Invalid </p>

          departure.length > 0 && dropDown(departure)

          <input
            placeholder="Enter arriving station..."
            name="arrival"
            value={arrival}
            autoComplete="off"
            onChange={handleInput}
            className={`${
              arrivalEmpty ? "form__Main-Input_Red" : "form__Main-Input"
            }`}
          />
          <datalist id="stations">
            {stationInfo.map(station => (
              <option key={station.abbr} value={station.name} />
            ))}
          </datalist>

           {arrivalEmpty && <p> Invalid </p>}

          <div>{arrival.length > 0 && dropDown(arrival)}</div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

        <div>{submitted && <AutoComplete input={state} />}</div>
      </div>
    </div>
  ); 




 */

// if (name === "arrival" && arrivalEmpty) {
//   setTravelState({ arrivalEmpty: false });
// }
// if (name === "departure" && departureEmpty) {
//   setTravelState({ departureEmpty: false });
// }

// const [
//   { arrival, departure, arrivalEmpty, departureEmpty },
//   setTravelState
// ] = useState<TravelTypes>({
//   arrival: "",
//   departure: "",
//   arrivalEmpty: true,
//   departureEmpty: true
// });
// const [
//   travelState,
//   setTravelState
// ] = useState<TravelTypes>({
//   arrival: "",
//   departure: "",
//   arrivalEmpty: true,
//   departureEmpty: true
// });

// const [travelState, setTravelState] = useReducer(
//   (state: TravelTypes, newState: Partial<TravelTypes>) => ({
//     ...state,
//     ...newState
//   }),
//   {
//     arrival: "",
//     departure: "",
//     arrivalEmpty: true,
//     departureEmpty: true
//   }
// );

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;

//   setTravelState({ [name]: value });
// };

// const { arrival, departure, arrivalEmpty, departureEmpty } = travelState;

// const departureInputLength = departure.inputVal.length
// const destinationInputLength = destination.inputVal.length

/*
  if destin
*/
