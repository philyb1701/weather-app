import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date" data-testid="forecast-details">
        {formattedDate}
      </div>
      <div className="forecast-details__max-temp" data-testid="forecast-temp">
        High: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__max-temp" data-testid="forecast-temp">
        Min: {temperature.min}&deg;C
      </div>
      <div
        className="forecast-details__humidity"
        data-testid="forecast-humidity"
      >
        Humidity: {humidity}%
      </div>
      <div className="forecast-details__wind" data-testid="forecast-wind">
        Wind: {wind.speed}mph
      </div>
      <div
        className="forecast-details__direction"
        data-testid="forecast-direction"
      >
        Direction: {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      direction: PropTypes.string,
      speed: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastDetails;
