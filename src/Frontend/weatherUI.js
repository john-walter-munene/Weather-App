import { getWeatherData, getAppropriateWeatherGif, createWeatherObject } from "../Console App/weatherConsole";

// Get all DOM Elements.
const searchInput = document.querySelector('input[type="search"]');
const searcherImage = document.querySelector('.search-icon');
const temperatureDisplay = document.querySelector('.temp-disp');
const windSpeedDisplay = document.querySelector('.windspeed');
const latitudeDisplay = document.querySelector('.latitude');
const longitudeDisplay = document.querySelector('.longitude');
const animationsDisplay = document.querySelector('.animation');
const locationDisplay = document.querySelector('h3');
const briefSummaryDisplay = document.querySelector('.short-text');
const weatherForecastDisplay = document.querySelector('h1');
const weatherSearchIdentifier = document.querySelector('.identifier');
const fullSummaryDisplay = document.querySelector('.full-text');
const toggleDetailsButton = document.querySelector('.toggler');
const alternativeTempartureDisplay = document.querySelector('.new-temp');

function addLatestSearchToStore(weatherDetailsObject) {
    // If store length equal to 10, delete last item.
    if (weatherSearchesStore.length === 10) weatherSearches.pop();
    weatherSearchesStore.push(weatherDetailsObject);
    console.log("Pushed Object", weatherDetailsObject);
}

const weatherSearchesStore = [];


searcherImage.addEventListener('click', () => {
    let location = searchInput.value;
    
    getWeatherData(location)
        .then(data => getAppropriateWeatherGif(data))
        .then(data => createWeatherObject(data))
        .then(data => addLatestSearchToStore(data));
});