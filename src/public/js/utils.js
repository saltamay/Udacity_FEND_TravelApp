// Get user location and date input on  submit
const getUserLocation = () => {
  
  const location = document.getElementById('location').value;

  console.log(location);

  return location;
}

const getUserDate = () => {

  const date = document.getElementById('date').value.split('-');

  return date.join('/');
}

const countdown = (date) => {

  const now = Date.parse(new Date());
  const tripDate = Date.parse(new Date(date));

  console.log(now);
  console.log(tripDate);

  const countdown = tripDate - now;

  const daysLeft = Math.ceil(countdown / 86400000);

  console.log(daysLeft);

  return daysLeft;
}

export { getUserLocation, getUserDate, countdown};