import axios, { AxiosResponse } from "axios";
import checkErrorStatus from "./checkErrorStatus";
import getStationAbbr from "./getStationAbbr";
import { StationInfoProps } from "../SearchForm/MainFormView";

const routeSubmissionUrl = process.env.REACT_APP_SUBMISSION_URL;

export type TravelInfoTypes = {
  departure: object;
  fares: object;
};

// interface TravelResponseInterface {
//   response: TravelInfoTypes;
// }

const submitStationInfo = async (
  submissionInfo: FormDataEntryValue[],
  stationInfo: StationInfoProps[]
) => {
  const [arrival, departure] = submissionInfo;
  let arrivalAbbr = getStationAbbr(arrival, stationInfo);
  let departureAbbr = getStationAbbr(departure, stationInfo);

  /**
   * only receivng departure information for now but will receive event
   * information in the future
   */
  if (routeSubmissionUrl) {
    const departureResponse: AxiosResponse<TravelInfoTypes> = await axios.get(
      routeSubmissionUrl,
      {
        params: {
          arrival: arrivalAbbr,
          departure: departureAbbr
        }
      }
    );
    let error = checkErrorStatus(departureResponse);
    if (error !== null) {
      throw new Error(error);
    } else {
      return departureResponse; // ensure that is an object
    }
  }
};

export default submitStationInfo;
