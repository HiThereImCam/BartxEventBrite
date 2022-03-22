import { StationInfoProps } from "../SearchForm/MainFormView";

const checkInputValues = (
  stationInfo: StationInfoProps[],
  inputValue: string
) => {
  const nameOfStations = stationInfo.map(station => station.name);
  return nameOfStations.includes(inputValue);
};

export default checkInputValues;
