import React, { useEffect, useState } from "react";

const submissionURL = process.env.REACT_APP_SUBMISSION_URL;
// http://localhost:3001/route-submissions
// let objToString = inputProp => {
//   Object.keys(inputProp.input).map(key =>

//   );
// };

// objToString(inputProp);

// let objectToString = inputState => {
//   console.log(inputState[0].keys());
// };

// objectToString(inputState);

// let objToString = inputState  => {
//   return Object.keys(input).map(key => key + "=" + input[key].join("&"));
// };

// console.log(`${submissionURL}?${objToString()}`);
/**
 *
 * @param {*} arrival
 * @param {*} destination
 *
 *  What this function is going to do is-
 * 1.) Invoke a POST request to the server
 * 2.) notsure
 */

// let response = {"departure":{"firstDeparture":"13","secondDeparture":"Data is unavailable at this
// time"},"fares":{"clipper":{"name":"Clipper","amount":"7.30"},"ticket":{"name":"BART Blue
// Ticket","amount":"7.80"},"senior":{"name":"Senior/Disabled Clipper","amount":"2.70"},"youth":{"name":"Youth
// Clipper","amount":"3.65"}}}

function AutoComplete(inputProp) {
  console.log("In autocomplete");
  //   return <div>hello from autocomplete</div>;
  const [receivedData, setReceivedData] = useState([]);
  const [received, setReceived] = useState(false);

  useEffect(() => {
    const request = {
      method: "GET",
      headers: { "Content-type": "application/json" }
    };
    try {
      fetch(
        `${submissionURL}?departure=${inputProp.input["departure"]}&arrival=${inputProp.input["arrival"]}`,
        request
      )
        .then(response => {
          return response.json();
        })
        .then(allInfo => {
          setReceivedData(allInfo);
          setReceived(true);
        });
    } catch (e) {
      console.log("Error in Autocomplete Fetch: ", e);
      return <div> We're sorry for the inconvenience </div>;
    }
  }, [inputProp]);

  return (
    <div>
      Next two departures
      <ul>
        {received === true &&
          Object.keys(receivedData.departure).map((property, i) => (
            <li key={i}>
              {property}: {receivedData.departure[property]}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AutoComplete;
