import React, { Fragment, useState } from "react";
import { StationInfoProps } from "../SearchForm/MainFormView";
import checkInputValues from "../../util/checkInputValues/checkInputValues";

interface Props {
  name: string;
  stationInfo: StationInfoProps[];
  wasSubmitted: boolean;
}

const Input = ({ name, stationInfo, wasSubmitted }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const errorMessage = checkInputValues(stationInfo, inputValue);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  return (
    <Fragment>
      <input
        placeholder="Enter station... "
        name={name}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onBlur={() => setTouched(true)}
        list={"stations"}
        autoComplete="off"
      />
      {displayErrorMessage ? { errorMessage } : null}
    </Fragment>
  );
};

export default Input;
