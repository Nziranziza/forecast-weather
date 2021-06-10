import {
  GET_FORECAST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAILURE,
  GET_WEATHER,
  GET_WEATHER_FAILURE,
  GET_WEATHER_SUCCESS,
} from "redux/types";
import initalState from "redux/initial-states";

const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_FORECAST:
      return {
        ...state,
        forecast: {
          ...state.forecast,
          loading: true,
        },
      };
    case GET_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: {
          ...state.forecast,
          loading: false,
          data: payload,
        },
      };
    case GET_FORECAST_FAILURE:
      return {
        ...state,
        forecast: {
          ...state.forecast,
          loading: false,
          error: payload,
        },
      };
    case GET_WEATHER:
      return {
        ...state,
        weather: {
          ...state.weather,
          loading: true,
        },
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        weather: {
          ...state.weather,
          loading: false,
          error: payload,
        },
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: {
          ...state.weather,
          loading: false,
          data: payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
