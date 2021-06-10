import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "components/Button";
import "components/Weather/index.scss";
import { CircularProgress } from "@material-ui/core";
import { getWeather, getForecast } from "services/api/weather";
import { useDispatch } from "react-redux";
import Select from "components/Select";
import citiesToOptions from "utils/citiesToOptions";
import cities from "constants/cities";
import Forecast from 'components/Forecast';
import formatTemperature from 'utils/formatTemperature';
import formatWindSpeed from 'utils/formatWindSpeed';

const Weather = () => {
  const { loading, data } = useSelector((state) => state.weather);
  const { data: { city } } = useSelector((state) => state.forecast);
  const [selectedCity, setSelectedCity] = useState(null);
  const [forecast, setForecast] = useState(false);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => {
    getWeatherHandler(value)
    setSelectedCity(value);
    if(forecast) {
      getForecastHandler();
    }
  };

  const toggleForecast = () => {
    setForecast(!forecast)
  }

  const getForecastHandler = () => {
    dispatch(getForecast(selectedCity))
  }

  const getWeatherHandler = (cityId) => {
    dispatch(getWeather(cityId));
  }

  const onForeCast = () => {
    toggleForecast();
    if(city.id !== selectedCity) {
      getForecastHandler();
    }
  };

  return (
    <>
      <Select
        options={citiesToOptions(cities)}
        labelId="cities-dropdown"
        labelName="City"
        onChange={onChange}
        value={selectedCity}
      />
      {loading ? (
        <div className="weather-container">
          <CircularProgress />
        </div>
      ) : (
        <>
          {selectedCity && (
            <div className="weather-container">
              {data.weather.map(({main, description }) => (
                <div className="input-value-pair">
                  <span>{main}</span>
                  <span>{description}</span>
                </div>
              ))}
              <div className="input-value-pair">
                <span>{formatTemperature(data.wind.deg)}</span>
                <span>Wind {formatWindSpeed(data.wind.speed)}</span>
              </div>
              <Button 
              color="primary" 
              size="large"
              onClick={onForeCast}
              >
                {!forecast ? 'SEE FORECAST' : 'Close'}
              </Button>
              {forecast && <Forecast />}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Weather;
