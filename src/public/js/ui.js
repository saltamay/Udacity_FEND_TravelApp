import { countdown } from './utils';

const displayTripInfo = (images, city, country, date, weather) => {
  document.querySelector('.caption').style.display = 'none';
  document.querySelector('.trip').style.display = 'block';

  let tripDate = new Date(date);

  document.querySelector('.images').setAttribute('src', images.hits[0].largeImageURL);
  document.querySelectorAll('.media_heading')[0].innerText = `${city}, ${country}`;
  document.querySelectorAll('.media_heading')[1].innerText = `${tripDate.toDateString()}`;

  // Display the days left to trip
  const daysLeft = countdown(date);
  document.querySelector('.trip_countdown').innerText = `${city}, ${country} is ${daysLeft} days away`;

  // Display weather info
  if (daysLeft <= 7) {
    console.log(weather.currently);
    document.querySelector('.trip_weather').innerHTML = `<p>The current weather in ${city}, ${country} is:</p>
                                                       <p>${weather.currently.temperature}&deg;F</p>
                                                       <p>${weather.currently.summary}</p>`;
  } else {
    tripDate = Date.parse(tripDate);
    let weatherInfo = {};
    console.log(weather.daily.data);
    for (let i = 0; i < weather.daily.data.length; i++) {
      if (tripDate >= weather.daily.data[i].time) {
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
