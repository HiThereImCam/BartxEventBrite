import React from "react";
import { AxiosResponse } from "axios";
import { TravelInfoTypes } from "../util/submitStationInfo";

interface TravelResultsProps {
  travelInfo: AxiosResponse;
}
const TravelResults = (props: TravelResultsProps) => {
  return <div> Hello </div>;
};

export default TravelResults;
