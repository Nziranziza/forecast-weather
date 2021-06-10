import {
  GET_FORECAST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAILURE,
  GET_WEATHER,
  GET_WEATHER_FAILURE,
  GET_WEATHER_SUCCESS
} from 'redux/types';

export const gettingForecast = () => ({
  type: GET_FORECAST,
});

export const getForecastSuccess = (payload) => ({
  type: GET_FORECAST_SUCCESS,
  payload
});

export const getForecastFailure = (payload) => ({
  type: GET_FORECAST_FAILURE,
  payload
});

export const gettingWeather = () => ({
  type: GET_WEATHER,
});

export const getWeatherSuccess = (payload) => ({
  type: GET_WEATHER_SUCCESS,
  payload
});

export const getWeatherFailure = (payload) => ({
  type: GET_WEATHER_FAILURE,
  payload
})
