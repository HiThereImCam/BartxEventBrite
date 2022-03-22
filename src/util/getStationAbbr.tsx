import { StationInfoProps } from "../Components/SearchForm/MainFormView";

let getStationAbbr = (
  searchedValue: FormDataEntryValue,
  stationInfo: StationInfoProps[]
) => {
  if (stationInfo instanceof Array) {
    console.log("here inside if");
    let foundAbbr = "";

    for (let i = 0; i < stationInfo.length; i++) {
      if (stationInfo[i].name === searchedValue) {
        foundAbbr = stationInfo[i].abbr.toUpperCase();
      }
    }

    console.log("foundAbbr: ", foundAbbr);
    return foundAbbr;
  }

  // needs to be an Error message or component
  return "invalid value";
};

export default getStationAbbr;
