// Get user location and date input on  submit
const getUserLocation = () => {
  
  const location = document.getElementById('location').value;

  console.log(location);

  return location;
}

const getTripStart = () => {

  const date = document.getElementById('date_start').value.split('-');

  return date.join('/');
}

const getTripEnd = () => {
  const date = document.getElementById('date_end').value.split('-');

  return date.join('/');
}

const countdown = (start, end) => {

  const tripStart = Date.parse(start);
  const tripEnd = Date.parse(end);

  const countdown = tripEnd - tripStart;

  const daysLeft = Math.ceil(countdown / 86400000);

  console.log(daysLeft);

  return daysLeft;
}

export { getUserLocation, getTripStart, getTripEnd, countdown};