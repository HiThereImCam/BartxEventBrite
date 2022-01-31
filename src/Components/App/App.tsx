import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorComponent from "../Reusables/ErrorComponent";
import getData from "../util/getData";
import "./_App.scss";
import { MainFormView, StationInfoProps } from "../SearchForm/MainFormView";
// import stationInfoProps from "../SearchForm/MainFormView";

const stationUrl = process.env.REACT_APP_STATIONS_URL;

type reducerState = {
  loading: boolean;
  error: string;
};
function App() {
  const [state, setState] = useReducer(
    (state: reducerState, newState: reducerState) => ({
      ...state,
      ...newState
    }),
    { loading: true, error: "" }
  );
  const [stations, setStations] = useState<Array<StationInfoProps>>([]);

  /**

   *
   * mental note: we need to save off the bart data
   * for the predictive functionality
   *
   * Need to learn how to cache it for later use
   *
   */

  let getStations = async () => {
    let stationData: StationInfoProps[] = await getData(stationUrl);

    if (!Array.isArray(stationData)) {
      setState({ loading: false, error: stationData });
    } else {
      setStations(stationData);
      setState({ loading: false, error: "" });
    }
  };

  useEffect(() => {
    getStations();
  }, []);

  let { loading, error } = state;
  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <Routes>
          <Route path="/" element={<MainFormView stationInfo={stations} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
