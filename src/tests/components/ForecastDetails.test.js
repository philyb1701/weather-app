import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 11111111,
    temperature: {
      max: 22,
      min: 12,
    },
    humidity: 6,
    wind: {
      direction: "new",
      speed: 10,
    },
    onForecastSelect() {
      return 1;
    },
  };

  describe("ForecastDetails-snapshot", () => {
    it("renders the 4 propss correctly", () => {
      const { asFragment } = render(<ForecastDetails forecast={validProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("ForecastDetails-values", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);
    expect(getByText("Thu Jan 01 1970")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(getByText("Max Temperature: 22°C")).toHaveAttribute(
      "Class",
      "forecast-details__temp"
    );
    expect(getByText("Min Temperature: 12°C")).toHaveAttribute(
      "Class",
      "forecast-details__temp"
    );
    expect(getByText("Humidity: 80%")).toHaveAttribute(
      "Class",
      "forecast-details__humidity"
    );
  });
});
