import React, { useState, useEffect, useReducer } from "react";
import MainFormView from "../SearchForm/MainFormView";
import getData from "../util/getData";
import "./_App.scss";
// const reactURL = process.env.REACT_APP_API_URL;
// ${reactURL}
// const MainFormView = React.lazy(() => import("../SearchForm/MainFormView"));
function App() {
  /**
   * Upon start up, call bart API to get list of stations
   *
   */

  const [state, setState] = useReducer();
  const [getStations, setStations] = useState([]);
  // const [loading, setLoading] = useState(true);

  /**
   * using useEffect on initial render
   * want list of stations on initial render
   *
   * mental note: we need to save off the bart data
   * for the predictive functionality
   *
   * Need to learn how to cache it for later use
   *
   */

  useEffect(() => {
    let fetchStations = async () => {
      try {
        // const resData = await fetch(`http://localhost:3001/getStations`);
        // const stationRes = await resData.json();
        let url = "http://localhost:3001/getStations";
        // debugger;
        let stationData = getData(url);
        setStations(stationData);
      } catch (e) {
        console.log("Error: ", e);
      }
    };

    fetchStations();
  }, []);

  return (
    <div className="App">
      {error}
      <MainFormView stationInfo={getStations} />
    </div>
  );
}

export default App;
