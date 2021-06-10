import createOption from 'utils/createOption';
export default function citiesToOptions(cities) {
  return cities.map(city => createOption(city.id, `${city.name}, ${city.country}`))
}