import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.scss';
import 'bootstrap';
const $ = require("jquery");
import { getUserLocation, getTripStart, getTripEnd } from './utils'
import { getLocation, getWeatherForecast, getImages, getCountryInfo } from './request';
import { displayTripInfo, displayTrip } from './ui';

console.log('Entry point is setup');

document.getElementById('button_search').addEventListener('click', async (e) => {
  e.preventDefault();

  const location = getUserLocation();
  const tripStart = getTripStart();
  const tripEnd = getTripEnd();

  const locationInfo = await getLocation(location);

  const weatherForecast = await getWeatherForecast(locationInfo, Date.parse(tripStart)/1000);

  const countryInfo = await getCountryInfo(locationInfo);
  
  const images = await getImages(location);

  displayTripInfo(images, location, countryInfo, tripStart, tripEnd, weatherForecast);

});

document.querySelector('.trip_save').addEventListener('click', async (e) => {
  e.preventDefault();
  $('#tripModal').modal('toggle');
  const location = getUserLocation();
  const tripStart = getTripStart();
  const tripEnd = getTripEnd();

  const locationInfo = await getLocation(location);

  const weatherForecast = await getWeatherForecast(locationInfo, Date.parse(tripStart) / 1000);

  const countryInfo = await getCountryInfo(locationInfo);

  const images = await getImages(location);
  displayTrip(images, location, countryInfo, tripStart, tripEnd, weatherForecast);
})

document.querySelectorAll('.trip_cancel').forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    $('#tripModal').modal('toggle');
    document.querySelector('.caption').style.display = 'block';
  })
});
