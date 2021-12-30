import checkErrorStatus from "./checkErrorStatus";

const getData = async (url: any) => {
  try {
    const dataResponse = await fetch(url);
    let error = checkErrorStatus(dataResponse);

    if (error !== null) {
      throw new Error(error);
    } else {
      const data = await dataResponse.json();
      return data;
    }
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    } else {
      return String(err);
    }
  }
};

export default getData;
