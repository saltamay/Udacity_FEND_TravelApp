const geonamesUrl = 'http://api.geonames.org/';
const geonamesKey = 'stamay';
const geonamesQuery = 'searchJSON?formatted=true&q=';

const darkSkyURL = 'https://api.darksky.net/forecast/';
const darkSkyKey = 'a44b6a01155bc9391c311378b6f5bcee';

const pixabayURL = 'https://pixabay.com/api/?key=';
const pixabayKey = '13922659-0b80b0f115dd3a353e0647b73';



async function getLocation(location) {
  const endpoint = geonamesUrl + geonamesQuery + location + '&username=' + geonamesKey + '&style=full'; 
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const location = {};
      const jsonRes = await response.json();
      
      location.latitude = jsonRes.geonames[0].lat;
      location.longitude = jsonRes.geonames[0].lng;
      location.country = jsonRes.geonames[0].countryCode;

      console.log(location);
      return location;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getCurrentWeather(locationObj) {
  const endpoint = darkSkyURL + darkSkyKey + `/${locationObj.latitude}, ${locationObj.longitude}`;
  try {
    const response = await fetch('http://localhost:8080/current',
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: endpoint })
      });
    if (response.ok) {
      const jsonRes = await response.json();
      console.log(jsonRes.currently);
      return jsonRes.currently;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getWeatherForecast(locationObj, date) {
  const endpoint = darkSkyURL + darkSkyKey + `/${locationObj.latitude}, ${locationObj.longitude}`;
  try {
    const response = await fetch('http://localhost:8080/forecast',
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: endpoint })
      });
    if (response.ok) {
      const jsonRes = await response.json();
      console.log(jsonRes.daily);
      return jsonRes.daily;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getImages(location) {
  const pixabayQuery = `&q=${location}&image_type=photo&pretty=true&category=places`
  const endpoint = pixabayURL + pixabayKey + pixabayQuery;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonRes = await response.json();
      console.log(jsonRes.hits[0].largeImageURL);
      return jsonRes;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getCountryName(locationObj) {
  const endpoint = `https://restcountries.eu/rest/v2/alpha/${locationObj.country}`
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonRes = await response.json();
      console.log(jsonRes.name);
      return jsonRes.name;
    }
  } catch (error) {
    console.log(error);
  }
}

export { getLocation, getCurrentWeather, getImages, getCountryName, getWeatherForecast };

