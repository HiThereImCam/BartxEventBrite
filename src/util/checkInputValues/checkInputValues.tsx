import { StationInfoProps } from "../../Components/SearchForm/MainFormView";

const checkInputValues = (
  stationInfo: StationInfoProps[],
  inputValue: string
) => {
  const nameOfStations = stationInfo.map(station => station.name);
  return !nameOfStations.includes(inputValue) ? true : false;
};

export default checkInputValues;
