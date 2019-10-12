
const displayTripInfo = (images) => {
  document.querySelector('.caption').style.display = 'none';
  document.querySelector('.trip').style.display = 'block';

  document.querySelector('.images').setAttribute('src', images.hits[0].largeImageURL);
}

export { displayTripInfo };
