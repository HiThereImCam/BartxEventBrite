import React from "react";
import { AxiosResponse } from "axios";
import { TravelInfoTypes } from "../../util/submitStationInfo";

interface TravelResultsProps {
  travelInfo: AxiosResponse;
}
const TravelResults = (props: TravelResultsProps) => {
  console.log("travel results props: ", props);
  return <div> Hello </div>;
};

export default TravelResults;
