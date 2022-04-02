import React, { useState } from "react";
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
    <div className="input-container">
      <input
        placeholder="Enter station... "
        name={name}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onBlur={() => setTouched(true)}
        list={"stations"}
        autoComplete="off"
        className="input"
      />
      {displayErrorMessage ? { errorMessage } : null}
    </div>
  );
};

export default Input;
