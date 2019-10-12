// Get user location and date input on  submit
const getUserLocation = () => {
  
  const location = document.getElementById('location').value;

  console.log(location);

  return location;
}

const getUserDate = () => {

  const date = document.getElementById('date').value;

  console.log(date);

  return date;
}

export { getUserLocation, getUserDate};