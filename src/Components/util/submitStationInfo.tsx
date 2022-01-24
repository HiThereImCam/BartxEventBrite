import axios, { AxiosResponse } from "axios";
import checkErrorStatus from "./checkErrorStatus";

const routeSubmissionUrl = process.env.REACT_APP_SUBMISSION_URL;

export type TravelInfoTypes = {
  departure: object;
  fares: object;
};

// interface TravelResponseInterface {
//   response: TravelInfoTypes;
// }

interface SubmittedStationInfoProps {
  travelInfo: string[];
}

const submitStationInfo = async (props: SubmittedStationInfoProps) => {
  const [arrival, departure] = props.travelInfo;

  /**
   * only receivng departure information for now but will receive event
   * information in the future
   */
  if (routeSubmissionUrl) {
    const departureResponse: AxiosResponse<TravelInfoTypes> = await axios.get(
      routeSubmissionUrl,
      {
        params: {
          arrival: arrival,
          departure: departure
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
