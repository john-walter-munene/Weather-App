// Get required DOM elements.
const weatherApplication = document.querySelector('.weather-app');
const temperatureHolder = document.querySelector('.temperature-disp');
const locationHolder = document.querySelector('.location-details');
const weatherGifHolder = document.querySelector('.weather-gif');
const briefSummaryHolder = document.querySelector('.brief-summary');
const forecastHolder = document.querySelector('.weather-forecast');
const forecastDescriptionHolder = document.querySelector('.weathercast-description');
const toggleDetailsHolder = document.querySelector('.toggle-details');
const latestSearchesHolder = document.querySelector('.last-searches');

const uIComponents = [
    temperatureHolder,
    locationHolder,
    weatherGifHolder,
    briefSummaryHolder,
    forecastHolder,
    forecastDescriptionHolder,
    toggleDetailsHolder,
    latestSearchesHolder,
];

function blurContentWaitingForResponse() {
    uIComponents.forEach((component) => component.style.opacity = 0);
}

function displayLoadingComponent() {
    const loadingComponent = document.createElement('div');
    loadingComponent.setAttribute('class', 'loading-component');
    const loadingText = document.createElement('h3');
    loadingText.textContent = 'Hold a moment, fetching you weather forecast...';
    loadingComponent.appendChild(loadingText);

    weatherApplication.appendChild(loadingComponent);
}

function removeLoadingComponent() {
    const loadingComponent = document.querySelector('.loading-component');
    if (loadingComponent) weatherApplication.removeChild(loadingComponent);
    uIComponents.forEach((component) => component.style.opacity = 1);
}

export { blurContentWaitingForResponse, displayLoadingComponent, removeLoadingComponent, };