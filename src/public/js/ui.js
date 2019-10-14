import { countdown } from './utils';
import { getImages } from './request';
import 'bootstrap';
const $ = require("jquery");


const getTripDate = (date) => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const tripDate = new Date(date);
  const tripDateText = `${days[tripDate.getDay()]}, ${months[tripDate.getMonth()]} ${tripDate.getDate()}, ${tripDate.getFullYear()}`;

  return tripDateText;
}

const getTripImageURL = async (images) => {
  // Check if location returns any images
  if (images.totalHits === 0) {
    // If not, display pictures for the country
    const newImages = await getImages(countryInfo.name);
    console.log(newImages.hits[0].largeImageURL);
    return newImages.hits[0].largeImageURL;
  } else {
    console.log(images.hits[0].largeImageURL);
    return images.hits[0].largeImageURL;
  }
}

const displayWeatherInfo = (weather, daysLeft) => {

  if (daysLeft <= 7) {
    console.log(weather.currently);
    document.querySelector('.trip_weather').innerHTML = `<p>The current weather:</p>
                                                       <p>${weather.currently.temperature}&deg;F</p>
                                                       <p>${weather.currently.summary}</p>`;
  } else {
    tripStart = Date.parse(tripStart);
    let weatherInfo = {};
    /**
     * Daily forecast returns forecasts for 8 days.
     * Go through the array to match the correct day
     */
    for (let i = 0; i < weather.daily.data.length; i++) {
      if (tripStart >= weather.daily.data[i].time) {
        weatherInfo = weather.daily.data[i];
        break;
      }
    }
    document.querySelector('.trip_weather').innerHTML = `<p>Typical weather for then is:</p>
                                                       <p>High ${weatherInfo.temperatureHigh}&deg;F, Low ${weatherInfo.temperatureLow}&deg;F</p>
                                                       <p>${weatherInfo.summary}</p>`;
  }
}

const displayTripInfo = async (images, city, countryInfo, start, end, weather) => {
  
  document.querySelector('.caption').style.display = 'none';
  
  $('#tripModal').modal({
    keyboard: false
  })

  document.querySelector('.trip_title').innerHTML = `<img src="${countryInfo.flag}" class="flag"> ${city}, ${countryInfo.name}`;
  
  // Display location, dates and the duration
  document.querySelectorAll('.media_heading')[0].innerText = `${city}, ${countryInfo.name}`;
  
  //
  const tripStart = getTripDate(start);
  const tripEnd = getTripDate(end);
  document.querySelectorAll('.media_heading')[1].innerText = tripStart;
  document.querySelectorAll('.media_heading')[2].innerText = tripEnd;

  document.querySelectorAll('.media_heading')[3].innerText = `${countdown(start, end)} days`;

  // Display trip images
  const imageURL = await getTripImageURL(images);
  document.querySelector('.images').setAttribute('src', imageURL);

  // Display the days left to trip
  const daysLeft = countdown(new Date(), start);
  document.querySelector('.trip_countdown').innerText = `Your trip to ${city} is ${daysLeft} days away`;

  // Display weather info
  displayWeatherInfo(weather, daysLeft);
}

const displayTrip = async (images, city, countryInfo, start, end, weather) => {

  const imageURL = await getTripImageURL(images);

  document.querySelector('.caption').style.display = 'none';

  const tripStart = getTripDate(start);
  const tripEnd = getTripDate(end);

  const daysLeft = countdown(new Date(), start);
  

  document.querySelector('.hero').innerHTML = `
  <div class="card mb-3" style="max-width: 698px; margin: 0 auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${imageURL}" class="card-img" alt="Picture of Travel Destination">
    </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title trip_title"><img src="${countryInfo.flag}" class="flag"> ${city}, ${countryInfo.name}</h3>
            <h6 class="mt-0">Departure: ${tripStart}</h6>
            <h6 class="mt-0">Return: ${tripEnd}</h6>
            <h6 class="mt-0">Duration: ${countdown(start, end)} days</h6>
            <span class="trip_countdown">Your trip to ${city} is ${daysLeft} days away</span>
            <span class="trip_weather"></span>
          </div>
        </div>
      </div>
    </div>`

  // Display weather info
  displayWeatherInfo(weather, daysLeft);
}

export { displayTripInfo, displayTrip };
