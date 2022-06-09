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
    humidity: 60,
    wind: {
      direction: "NE",
      speed: 10,
    },
    onForecastSelect() {
      return 1;
    },
  };

  describe("ForecastDetails-snapshot", () => {
    it("renders props correctly", () => {
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
    expect(getByText("Max: 22°C")).toHaveAttribute(
      "Class",
      "forecast-details__max-temp"
    );
    expect(getByText("Min: 12°C")).toHaveAttribute(
      "Class",
      "forecast-details__min-temp"
    );
    expect(getByText("Humidity: 60%")).toHaveAttribute(
      "Class",
      "forecast-details__humidity"
    );
    expect(getByText("Wind: 10mph")).toHaveAttribute(
      "Class",
      "forecast-details__wind"
    );
    expect(getByText("Wind: 10mph")).toHaveAttribute(
      "Class",
      "forecast-details__wind"
    );
    expect(getByText("Direction: NE")).toHaveAttribute(
      "Class",
      "forecast-details__direction"
    );
  });
});
