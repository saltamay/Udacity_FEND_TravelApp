import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.scss';
import { getUserLocation, getUserDate } from './utils'
import { getLocation, getCurrentWeather, getImages } from './request';

console.log('Entry point is setup');

document.getElementById('button_search').addEventListener('click', async (e) => {
  e.preventDefault();
  
  const location = getUserLocation();
  const date = getUserDate();

  const locationInfo = await getLocation(location);

  const currentWeather = await getCurrentWeather(locationInfo);
  
  const images = await getImages(location);
})