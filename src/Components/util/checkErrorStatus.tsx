interface Response {
  status: number;
}

const checkErrorStatus = (response: Response) => {
  if (response.status >= 400 && response.status < 600) {
    if (response.status === 404) {
      return "Invalid URL";
    } else {
      return "Bad response from server";
    }
  }

  return null;
};
export default checkErrorStatus;
