import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.scss';
import { getUserLocation, getTripStart, getTripEnd } from './utils'
import { getLocation, getWeatherForecast, getImages, getCountryInfo, displayHomepage } from './request';
import { displayTripInfo } from './ui';

console.log('Entry point is setup');

document.getElementById('button_search').addEventListener('click', async (e) => {
  e.preventDefault();
  
  const location = getUserLocation();
  const tripStart = getTripStart();
  const tripEnd = getTripEnd();

  const locationInfo = await getLocation(location);

  // const currentWeather = await getCurrentWeather(locationInfo);
  const weatherForecast = await getWeatherForecast(locationInfo, Date.parse(tripStart)/1000);

  const countryInfo = await getCountryInfo(locationInfo);
  
  const images = await getImages(location);

  displayTripInfo(images, location, countryInfo, tripStart, tripEnd, weatherForecast);
});

document.querySelector('.cancel').addEventListener('click', (e) => {
  window.location.reload(false);
})