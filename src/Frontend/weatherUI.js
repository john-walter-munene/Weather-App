import { getWeatherData, getAppropriateWeatherGif, createWeatherObject } from "../Console App/weatherConsole";
import { blurContentWaitingForResponse, displayLoadingComponent, removeLoadingComponent } from "./loadingComponent";
import { format } from "date-fns";
import { limitToTwoWords } from "../resources/utility";

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
    if (weatherDetailsObject) {
        // If store length equal to 10, delete last item.
        if (weatherSearchesStore.length === 10) weatherSearches.pop();
        weatherSearchesStore.push(weatherDetailsObject);
        console.log("Pushed Object: ", Object.keys(weatherDetailsObject).length);
       return weatherDetailsObject;
    } 
}

const weatherSearchesStore = [];


searcherImage.addEventListener('click', () => {
    let location = searchInput.value;

    // Hide old content and display some loading content.
    blurContentWaitingForResponse();
    displayLoadingComponent();

    getWeatherData(location)
        .then(data => getAppropriateWeatherGif(data))
        .then(data => createWeatherObject(data))
        .then(data => addLatestSearchToStore(data))
        .then(data => updateDisplayWithForecast(data))
        .then(removeLoadingComponent)
            .catch(error => console.log(`A promise failed: ${error}`));
});


function clearOldContent() {
    temperatureDisplay.textContent = '';
    windSpeedDisplay.textContent = '';
    latitudeDisplay.textContent = '';
    longitudeDisplay.textContent = '';
    animationsDisplay.textContent = '';
    locationDisplay.textContent = '';
    briefSummaryDisplay.textContent = '';
    weatherForecastDisplay.textContent = '';
    weatherSearchIdentifier.textContent = '';
    fullSummaryDisplay.textContent = '';
    toggleDetailsButton.style.display = 'none';
    alternativeTempartureDisplay.textContent = '';
}

function updateDisplayWithForecast(weatherObject) {
    try {
        if (weatherObject) {
            
            // Update content.
            clearOldContent();
            temperatureDisplay.textContent = weatherObject.temperature;
            windSpeedDisplay.textContent = weatherObject.windSpeed;
            latitudeDisplay.textContent = weatherObject.latitude;
            longitudeDisplay.textContent = weatherObject.longitude;
            animationsDisplay.src = weatherObject.weatherIcon;
            locationDisplay.textContent = limitToTwoWords(weatherObject.resolvedLocationName);
            briefSummaryDisplay.textContent = weatherObject.weatherSummary;
            weatherForecastDisplay.textContent = weatherObject.weatherForecast;
            weatherSearchIdentifier.textContent = `${weatherObject.resolvedLocationName}, ${getDayDateAndTime()}`;
            fullSummaryDisplay.textContent = weatherObject.WeatherDescription;
            toggleDetailsButton.style.display = 'block';
            alternativeTempartureDisplay.textContent = 'Coming Soon';
        }
    } catch(error) {
        console.log(error);
    }
}

function getDayDateAndTime() {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEEE, MMM d, yyyy, h:mm a');
    return formattedDate;
}