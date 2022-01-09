import React from "react";

type InputProps = {
  station: string;
};

export const Dropdown = input => {
  return (
    <div className="dropDown__wrapper">
      <ul className="dropDown__list">
        {stationInfo
          .filter(stationName => stationName.indexOf(input.toLowerCase()) > -1)
          .map((currVal, i) => {
            return (
              <div className="dropDown__list-Item">
                <li key={i} onClick={handleClick}>
                  {console.log("currVal", currVal)}
                  {currVal}
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
