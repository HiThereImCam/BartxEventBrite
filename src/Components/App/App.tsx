import React, { useState, useEffect, useReducer } from "react";
import MainFormView from "../SearchForm/MainFormView";
import ErrorComponent from "../Reusables/Error";
import getData from "../util/getData";
import "./_App.scss";

const stationsUrl = process.env.REACT_APP_STATIONS_URL;
console.log("stationsUrl: ", stationsUrl);
// ${reactURL}
// const MainFormView = React.lazy(() => import("../SearchForm/MainFormView"));

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
  const [stations, setStations] = useState([]);

  let getStations = async () => {
    let stationData: [] = await getData(stationsUrl);

    if (!Array.isArray(stationData)) {
      setState({ loading: false, error: stationData });
    } else {
      setStations(stationData);
    }
  };

  useEffect(() => {
    getStations();
  }, []);

  const { error, loading } = state;
  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <MainFormView stations={stations} />
      )}
    </div>
  );
}

export default App;

//  <MainFormView stations={stations} />;
