import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.scss';
import { getUserLocation, getUserDate, countdown } from './utils'
import { getLocation, getCurrentWeather, getImages, getCountryName } from './request';
import { displayTripInfo } from './ui';

console.log('Entry point is setup');

document.getElementById('button_search').addEventListener('click', async (e) => {
  e.preventDefault();
  
  const location = getUserLocation();
  const date = getUserDate();

  const locationInfo = await getLocation(location);

  const currentWeather = await getCurrentWeather(locationInfo);

  const country = await getCountryName(locationInfo);
  
  const images = await getImages(location);

  displayTripInfo(images, location, country, date);
})