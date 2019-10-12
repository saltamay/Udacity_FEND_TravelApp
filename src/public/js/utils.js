// Get user location and date input on  submit
const getUserLocation = () => {
  
  const location = document.getElementById('location').value;

  console.log(location);

  return location;
}

const getUserDate = () => {

  const date = document.getElementById('date').value.split('-');

  console.log(date);

  return date.join('/');
}

const countdown = (date) => {

  const today = Date.parse(new Date());
  const tripDate = Date.parse(new Date(date));

  console.log(today);
  console.log(tripDate);

  const countdown = tripDate - today;

  const daysLeft = Math.ceil(countdown / 86400000);

  console.log(daysLeft);

  return daysLeft;
}

export { getUserLocation, getUserDate, countdown};