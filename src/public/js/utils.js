// Get user location and date input on  submit
const getTripCity = () => {
  
  const location = document.getElementById('city').value;

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

export { getTripCity, getTripStart, getTripEnd, countdown};