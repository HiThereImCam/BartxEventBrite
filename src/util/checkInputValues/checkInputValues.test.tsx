/**
 * use cases-
 *  1.) if input value is in stationInfo return array with station
 *  2.) if input value is not in stationInfo return false
 *
 *
 */

import checkInputValues from "./checkInputValues";

type mockInputType = {
  input: string;
  expected: boolean;
};

let mockStationNames = [
  { name: "12th st. oakland city center", abbr: "12th" },
  { name: "hayward", abbr: "hayw" },
  { name: "warm springs/south fremont", abbr: "warm" },
  { name: "san francisco international airport", abbr: "sfia" },
  { name: "north berkeley", abbr: "nbrk" }
];

let mockInputValues: mockInputType[] = [
  { input: "nor", expected: true },
  { input: "north", expected: true },
  { input: "international", expected: true },
  { input: "north berkeley", expected: false },
  { input: "hayward", expected: false },
  { input: "12th st. oakland city center", expected: false }
];

describe("stationInfo returns array of station names: ", () => {
  it("should return an array of station names", () => {
    let expectedValues = [
      "12th st. oakland city center",
      "hayward",
      "warm springs/south fremont",
      "san francisco international airport",
      "north berkeley"
    ];
    expect(mockStationNames.map(station => station.name)).toEqual(
      expectedValues
    );
  });

  it("returns boolean if station array includes input", () => {
    mockInputValues.forEach(mockInput => {
      expect(checkInputValues(mockStationNames, mockInput.input)).toEqual(
        mockInput.expected
      );
    });
  });
});
