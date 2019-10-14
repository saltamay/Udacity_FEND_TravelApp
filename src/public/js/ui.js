import { countdown } from './utils';
import { getImages } from './request';

const displayTripInfo = async (images, city, countryInfo, start, end, weather) => {
  document.querySelector('.caption').style.display = 'none';
  document.querySelector('.trip').style.display = 'block';

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let tripStart = new Date(start);
  const tripStartText = `${days[tripStart.getDay()]}, ${months[tripStart.getMonth()]} ${tripStart.getDate()}, ${tripStart.getFullYear()}`;
  
  const tripEnd = new Date(end);
  const tripEndText = `${days[tripEnd.getDay()]}, ${months[tripEnd.getMonth()]} ${tripEnd.getDate()}, ${tripEnd.getFullYear()}`;

  document.querySelector('.trip_title').innerHTML = `<img src="${countryInfo.flag}" class="flag"> ${city}, ${countryInfo.name}`;

  //
  if (images.totalHits === 0) {
    const newImages = await getImages(countryInfo.name);
    console.log(newImages);
    document.querySelector('.images').setAttribute('src', newImages.hits[0].largeImageURL);
  } else {
    document.querySelector('.images').setAttribute('src', images.hits[0].largeImageURL);
  }
  
  document.querySelectorAll('.media_heading')[0].innerText = `${city}, ${countryInfo.name}`;
  document.querySelectorAll('.media_heading')[1].innerText = `${tripStartText} - ${tripEndText}`;
  document.querySelectorAll('.media_heading')[2].innerText = `${countdown(tripStart, tripEnd)} days`;

  // Display the days left to trip
  const daysLeft = countdown(new Date(), tripStart);
  document.querySelector('.trip_countdown').innerText = `Your trip to ${city} is ${daysLeft} days away`;

  // Display weather info
  if (daysLeft <= 7) {
    console.log(weather.currently);
    document.querySelector('.trip_weather').innerHTML = `<p>The current weather:</p>
                                                       <p>${weather.currently.temperature}&deg;F</p>
                                                       <p>${weather.currently.summary}</p>`;
  } else {
    tripStart = Date.parse(tripStart);
    let weatherInfo = {};
    // console.log(weather.daily.data);
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

export { displayTripInfo };