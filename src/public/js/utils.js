// Get user location and date input on  submit
const getLocation = () => {
  
  const location = document.getElementById('location').value;

  console.log(location);

  return location;
}

const getDate = () => {

  const date = document.getElementById('date').value;

  console.log(date);

  return date;
}

export { getLocation, getDate};