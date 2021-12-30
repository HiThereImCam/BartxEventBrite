import React, { useState, useEffect, useReducer } from "react";
import MainFormView from "../SearchForm/MainFormView";
import ErrorComponent from "../Reusables/ErrorComponent";
import getData from "../util/getData";
import "./_App.scss";
// const reactURL = process.env.REACT_APP_API_URL;
const stationUrl = process.env.REACT_APP_STATIONS_URL;
// ${reactURL}
// const MainFormView = React.lazy(() => import("../SearchForm/MainFormView"));

type reducerState = {
  loading: boolean;
  error: string;
};
function App() {
  /**
   * Upon start up, call bart API to get list of stations
   *
   */

  const [state, setState] = useReducer(
    (state: reducerState, newState: reducerState) => ({
      ...state,
      ...newState
    }),
    { loading: true, error: "" }
  );
  const [stations, setStations] = useState([]);
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

  let getStations = async () => {
    let stationData: [] = await getData(stationUrl);

    if (!Array.isArray(stationData)) {
      setState({ loading: false, error: stationData });
    } else {
      setStations(stationData);
      setState({ loading: false, error: "" });
    }
  };

  useEffect(() => {
    getStations();
    // let fetchStations = async () => {
    //   try {
    //     // const resData = await fetch(`http://localhost:3001/getStations`);
    //     // const stationRes = await resData.json();
    //     let url = "http://localhost:3001/getStations";
    //     // debugger;
    //     let stationData = getData(url);
    //     setStations(stationData);
    //   } catch (e) {
    //     console.log("Error: ", e);
    //   }
    // };

    // fetchStations();
  }, []);

  let { loading, error } = state;
  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <MainFormView stationInfo={stations} />
      )}
    </div>
  );
}

export default App;

//
