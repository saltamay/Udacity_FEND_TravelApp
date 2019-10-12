import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.scss';
import { getLocation, getDate } from './utils'


console.log('Entry point is setup');

document.getElementById('button_search').addEventListener('click', (e) => {
  e.preventDefault();
  getLocation();
  getDate();
})