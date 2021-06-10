const initalState = {
  weather: {
    loading: false,
    error: null,
    data: {}
  },
  forecast: {
    loading: false,
    error: null,
    data: {
      list: [],
      city: {}
    }
  }
}
export default initalState;
