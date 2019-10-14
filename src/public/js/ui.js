import { countdown } from './utils';
import { getImages } from './request';
import 'bootstrap';
const $ = require("jquery");


const displayTripDates = (startDate, endDate) => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const tripStart = new Date(startDate);
  const tripStartText = `${days[tripStart.getDay()]}, ${months[tripStart.getMonth()]} ${tripStart.getDate()}, ${tripStart.getFullYear()}`;

  const tripEnd = new Date(endDate);
  const tripEndText = `${days[tripEnd.getDay()]}, ${months[tripEnd.getMonth()]} ${tripEnd.getDate()}, ${tripEnd.getFullYear()}`;

  document.querySelectorAll('.media_heading')[1].innerText = tripStartText;
  document.querySelectorAll('.media_heading')[2].innerText = tripEndText;
}

const displayTripPics = async (images) => {
  // Check if location returns any images
  if (images.totalHits === 0) {
    // If not, display pictures for the country
    const newImages = await getImages(countryInfo.name);
    console.log(newImages);
    document.querySelector('.images').setAttribute('src', newImages.hits[0].largeImageURL);
  } else {
    document.querySelector('.images').setAttribute('src', images.hits[0].largeImageURL);
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
  displayTripDates(start, end);
  document.querySelectorAll('.media_heading')[3].innerText = `${countdown(start, end)} days`;

  // Display trip images
  displayTripPics(images);

  // Display the days left to trip
  const daysLeft = countdown(new Date(), start);
  document.querySelector('.trip_countdown').innerText = `Your trip to ${city} is ${daysLeft} days away`;

  // Display weather info
  displayWeatherInfo(weather, daysLeft);
}

export { displayTripInfo };
