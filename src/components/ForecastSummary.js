import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { date, temperature, description, icon } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date" data-testid="forecast-summary">
        {date}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary__temp" data-testid="forecast-temp">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__desc" data-testid="forecast-desc">
        {description}
      </div>
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
};
export default ForecastSummary;
