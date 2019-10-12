import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.scss';
import { getUserLocation, getUserDate } from './utils'
import getLocation from './request';

console.log('Entry point is setup');

document.getElementById('button_search').addEventListener('click', (e) => {
  e.preventDefault();
  
  const location = getUserLocation();
  const date = getUserDate();

  getLocation(location);
})