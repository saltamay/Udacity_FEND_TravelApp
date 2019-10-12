const url = 'http://api.geonames.org/';
const apiKey = 'stamay';
const queryParams = 'searchJSON?formatted=true&q=';


export default async function request(location) {
  const endpoint = url + queryParams + location + '&username=' + apiKey + '&style=full'; 
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonRes = await response.json();
      console.log(jsonRes.geonames[0].bbox);
      return jsonRes;
    }
  } catch (error) {
    console.log(error);
  }
}
