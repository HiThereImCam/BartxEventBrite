import checkErrorStatus from "./checkErrorStatus";

const getData = async (url: string) => {
  const dataResponse = await fetch(url);

  let error = checkErrorStatus(dataResponse);

  if (error !== null) {
    throw new Error(error);
  }

  const data = await dataResponse.json();

  console.log("data: ", data);
};

export default getData;
