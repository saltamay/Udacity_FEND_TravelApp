import { countdown } from './utils';

const displayTripInfo = (images, city, country, date) => {
  document.querySelector('.caption').style.display = 'none';
  document.querySelector('.trip').style.display = 'block';

  document.querySelector('.images').setAttribute('src', images.hits[0].largeImageURL);
  document.querySelectorAll('.media_heading')[0].innerText = `${city}, ${country}`;
  document.querySelectorAll('.media_heading')[1].innerText = `${date}`;

  // Display the days left to trip
  const daysLeft = countdown(date);

  document.querySelector('.trip_info').innerText = `${city}, ${country} is ${daysLeft} days away`;
}

export { displayTripInfo };
