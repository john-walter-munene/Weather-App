// Import necessary modules and utilities.
import {
  getWeatherData,
  getAppropriateWeatherGif,
  createWeatherObject,
} from "../Console App/weatherConsole";
import {
  blurContentWaitingForResponse,
  displayLoadingComponent,
  removeLoadingComponent,
} from "./loadingComponent";
import {
  limitToTwoWords,
  getDayDateAndTime,
  celsiusToFahrenheit,
} from "../resources/utility";
import {
  saveLatestStoreToLocalStorage,
  loadLastSearchesFromLocalStorage,
} from "../Console App/storage";

// Get all DOM Elements.
const searchInput = document.querySelector('input[type="search"]');
const searcherImage = document.querySelector(".search-icon");
const temperatureDisplay = document.querySelector(".temp-disp");
const windSpeedDisplay = document.querySelector(".windspeed");
const latitudeDisplay = document.querySelector(".latitude");
const longitudeDisplay = document.querySelector(".longitude");
const animationsDisplay = document.querySelector(".animation");
const locationDisplay = document.querySelector("h3");
const briefSummaryDisplay = document.querySelector(".short-text");
const weatherForecastDisplay = document.querySelector("h1");
const weatherSearchIdentifier = document.querySelector(".identifier");
const fullSummaryDisplay = document.querySelector(".full-text");
const toggleDetailsButton = document.querySelector(".toggler");
const farenheitTempHolder = document.querySelector(".data-view");
const latestSearchesDisplay = document.querySelector(".last-searches");

// Initialize store for latest weather searches.
const weatherSearchesStore = [];

// Event Listeners
searcherImage.addEventListener("click", handleSearchClick);
toggleDetailsButton.addEventListener("click", () =>
  updateToggleDetails(toggleDetailsButton)
);

// Event Handlers
function handleSearchClick() {
  const location = searchInput.value;

  // Hide old content and display some loading content.
  blurContentWaitingForResponse();
  displayLoadingComponent();

  getWeatherData(location)
    .then((data) => getAppropriateWeatherGif(data))
    .then((data) => createWeatherObject(data))
    .then((data) => addLatestSearchToStore(data))
    .then((data) => updateDisplayWithForecast(data))
    .then(removeLoadingComponent)
    .catch((error) => console.log(`A promise failed: ${error}`));
}

function updateToggleDetails(toggleDetailsButton) {
  if (toggleDetailsButton.textContent === "See Details") {
    showTemperatureInFarenheit();
  } else if (toggleDetailsButton.textContent === "Hide Details") {
    hideFarenheitTemps();
  }
}

// Core Functions
function showTemperatureInFarenheit() {
  // Get right data and content holder.
  const location = weatherSearchesStore[0].location;
  const temperature = weatherSearchesStore[0].temperature;

  farenheitTempHolder.textContent = "";

  const farenheitTempText = document.createElement("p");
  farenheitTempText.textContent = `The temperature of ${location} is ${celsiusToFahrenheit(
    temperature
  ).toFixed(1)}°F`;
  toggleDetailsButton.textContent = "Hide Details";

  farenheitTempHolder.appendChild(farenheitTempText);
}

function hideFarenheitTemps() {
  toggleDetailsButton.textContent = "See Details";
  farenheitTempHolder.textContent = "";
}

function addLatestSearchToStore(weatherDetailsObject) {
  if (weatherDetailsObject) {
    const { temperature, resolvedLocationName } = weatherDetailsObject;
    const formattedLocation = limitToTwoWords(resolvedLocationName);

    // Log the weatherDetailsObject before adding
    console.log("Adding to store:", { temperature, formattedLocation });

    weatherSearchesStore.unshift({ temperature, formattedLocation }); // Add the new item to the beginning
    console.log(
      `Added new Object. New store length is ${weatherSearchesStore.length}`
    );

    // Ensure we only keep the latest 5 searches
    if (weatherSearchesStore.length > 5) {
      weatherSearchesStore.pop(); // Remove the oldest item if needed
      console.log(
        `Removed oldest Object. New store length is ${weatherSearchesStore.length}`
      );
    }

    // Save the updated store to local storage
    saveLatestStoreToLocalStorage(weatherSearchesStore);
    return weatherDetailsObject;
  }
}

// Update Functions
function updateDisplayWithForecast(weatherObject) {
  try {
    if (weatherObject) {
      clearOldContent(); // Clear previous content

      // Update the display with new weather data
      temperatureDisplay.textContent = weatherObject.temperature;
      windSpeedDisplay.textContent = weatherObject.windSpeed;
      latitudeDisplay.textContent = weatherObject.latitude;
      longitudeDisplay.textContent = weatherObject.longitude;
      animationsDisplay.src = weatherObject.weatherIcon;
      locationDisplay.textContent = limitToTwoWords(
        weatherObject.resolvedLocationName
      );
      briefSummaryDisplay.textContent = weatherObject.weatherSummary;
      weatherForecastDisplay.textContent = weatherObject.weatherForecast;
      weatherSearchIdentifier.textContent = `${
        weatherObject.resolvedLocationName
      }, ${getDayDateAndTime()}`;
      fullSummaryDisplay.textContent = weatherObject.WeatherDescription;
      toggleDetailsButton.style.display = "block";

      // Clear the old searches display
      latestSearchesDisplay.innerHTML = "";

      // Update the latest searches display
      weatherSearchesStore.forEach((weatherItem) => {
        const { temperature, formattedLocation } = weatherItem;
        const temperatureLocationHolder = document.createElement("div");
        const temperatureText = document.createElement("p");
        const locationText = document.createElement("p");

        temperatureText.textContent = `${temperature}°C`;
        locationText.textContent = limitToTwoWords(formattedLocation);

        temperatureLocationHolder.append(temperatureText, locationText);
        latestSearchesDisplay.appendChild(temperatureLocationHolder);
      });

      console.log("Updated display with the latest forecasts.");
    }
  } catch (error) {
    console.log("Error updating display:", error);
  }
}

// Utility Functions
function clearOldContent() {
  temperatureDisplay.textContent = "";
  windSpeedDisplay.textContent = "";
  latitudeDisplay.textContent = "";
  longitudeDisplay.textContent = "";
  animationsDisplay.textContent = "";
  locationDisplay.textContent = "";
  briefSummaryDisplay.textContent = "";
  weatherForecastDisplay.textContent = "";
  weatherSearchIdentifier.textContent = "";
  fullSummaryDisplay.textContent = "";
  toggleDetailsButton.style.display = "none";
  farenheitTempHolder.textContent = "";
  latestSearchesDisplay.innerHTML = "";
}

export { weatherSearchesStore };
