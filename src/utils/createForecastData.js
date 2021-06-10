export default function createForecastData(
  date,
  temp,
  minTemp,
  maxTemp,
  wind,
  description
) {
  return {
    date,
    temp,
    minTemp,
    maxTemp,
    wind,
    description,
  };
}
