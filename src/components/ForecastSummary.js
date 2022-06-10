import React from "react";
import PropTypes from "prop-types";

import WeatherIcon from "react-icons-weather";

function ForecastSummary(props) {
  const { date, temperature, description, icon, onSelect } = props;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date" data-testid="forecast-summary">
        {formattedDate}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temp" data-testid="forecast-temp">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__desc" data-testid="forecast-desc">
        {description}
      </div>
      <button type="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default ForecastSummary;
