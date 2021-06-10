import Api from 'services/Api';
import { APP_ID } from 'config';
import {
  gettingForecast,
  getForecastFailure,
  getForecastSuccess,
  getWeatherFailure,
  getWeatherSuccess,
  gettingWeather
} from 'redux/actions';

export const getWeather = (cityId) => async (dispatch) => {
  try {
    dispatch(gettingWeather())
    const response = await Api.get('/weather', {
      id: cityId,
      appid: APP_ID
    });
    dispatch(getWeatherSuccess(response.data));
    return response.data;
  } catch(error) {
    dispatch(getWeatherFailure(error))
    throw error;
  }
}

export const getForecast = (cityId) => async (dispatch) => {
  try {
    dispatch(gettingForecast())
    const response = await Api.get('/forecast', {
      id: cityId,
      appid: APP_ID
    });
    dispatch(getForecastSuccess(response.data));
    return response.data;
  } catch(error) {
    dispatch(getForecastFailure(error))
    throw error
  }
}