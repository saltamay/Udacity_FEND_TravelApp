# Udacity Front End Development Nonodegree Capstone: My Custom Travel App

My custom travel app helps you plan your trips. Simply enter the desired trip location &amp; date; My Custom Travel App will display the current weather or weather forecast depending on the trip date and an image of the location using information obtained from external APIs.

## Table of Contents

1. [About the Project](#about-the-project)
2. [API(s) Used](#apis(s)-used)
3. [Development Strategy](#development-strategy)
4. [Additional Features](#additional-features)
5. [Getting Started](#getting-started) 
6. [Built With](#built-with)
4. [Licence](#licence)

## About the Project

In most cases of personal projects, it is very common to pull basic data from an external API. This is what we have accomplished so far in this nanodegree. However, many production level applications do not rely on only single source of data, they usually pull multiple data from various resources and make them available to different parts of the app asycroniously, so one API can use the data gathered from another API.

The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. The OpenWeather API that was used in Weather Journal App project is great, however the weather forecast future is not included in free tier, so we use DarkSky API in this project. DarkSky API is really specif in terms of the location and it only accepts coordinates of the location in order to pull weather information. For that, we are using Geonames API that lets us to obtain latitude and lontitude of the location we'd like to travel. As you can see, in our API, in order for us to pull the weather data, first we need to get the location information from a different API. Once we have all of this data, we use Pixabay API to display an image of the location entered. I also added an additional feature where we use the REST Countries API to display the national flag of the country. Also, I find out that not so well-known locations do not bring up any pictures from the API, in this case I set up the logic to make another API call to bring up a picture for the country.

## API(s) Used

* [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database from which the location data is pulled
* [DarkSky API](https://darksky.net/dev) - Weather API for current and future weather data
* [Pixabay API](https://pixabay.com/api/docs/) - RESTful interface for searching and retrieving free images and videos

## Development strategy

1. Setup Webpack Development Enviroment: For this, I have created a gist to follow along. This helps me to understand how the     dependencies interact with each other and what tools I need for specific task. Link to initial setup guideine can be found below:
   [Setting up a Webpak Development Environment using Node and Npm](https://gist.github.com/saltamay/443ae5ee02027c01fd9aba7a61c1ab57)
2. Setup a form where users can enter the trip destination and the dates
3. Pull data including lattitude, longtitude and country code from Geonames API using user input
4. Pass this data to DarkSky API along with user entered dates to obtain weather information
5. Introduce a countdown to find out how many days to the trip
6. Use country code to pull country name and national flag usin REST Countries API
7. Use location and country name to pull images from Pixabay API

## Additional Features

1. Add end date and display length of the trip
2. Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
3. Integrate the REST Countries API to pull in data for the country being visited.
4. Users can review the trip info and cancel before saving it.
  
   The following features proposed:
    1. Allow user to add multiple destinations on the same trip.
         - Pull in weather for additional locations.
    2. Allow the user to add hotel and/or flight data.
         - Multiple places to stay. Multiple flights.
    3. Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
    4. Instead of just pulling a single day forecast, pull the forecast for multiple days.
    5. Incorporate icons into forecast.
    6. Allow user to Print their trip and/or export to PDF.
    7. Allow the user to add a todo list and/or packing list for their trip.
    8. Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
         - Automatically sort additional trips by countdown.
         - Move expired trips to bottom/have their style change so it’s clear it’s expired.

## Getting Started

1. Download or clone the project:
```
git clone https://github.com/saltamay/travel-app.git [folder_name]
```
2. Install dependencies
```
npm install --save-dev
```
3. Start the server
```
npm start
```
4. Setup the environment development or production
```
npm run build-dev
```
or 
```
npm run build-prod
```
5. Test with Jest
```
npm run test
```

## Built With

* [Bootstrap](https://getbootstrap.com/) - The CSS framework used 
* [Sass](https://sass-lang.com/documentation) - The web framework used
* [Webpack](https://webpack.js.org/concepts/) - Asset Management
* [Babel](https://babeljs.io/) - JavaScript Compiler
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime
* [Express.js](https://expressjs.com/) - Server Framework for Node.js
* [Jest](https://jestjs.io/) - Testing suit
* [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers) - For offline capability

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
