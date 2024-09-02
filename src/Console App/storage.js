// Function to save the store to local storage
function saveLatestStoreToLocalStorage(weatherStore) {
    try {
        localStorage.setItem('weatherSearches', JSON.stringify(weatherStore));
    } catch (error) {
        console.error('Error saving to local storage:', error);
    }
}

// Function to load the store from local storage
function loadLastSearchesFromLocalStorage(weatherStore) {
    const weatherData = JSON.parse(localStorage.getItem('weatherSearches'));

    if (weatherData && weatherData.length > 0) {
        weatherStore.length = 0; // Clear the existing array
        weatherStore.push(...weatherData); // Add new data
        console.log(weatherStore);
    }
}

export { saveLatestStoreToLocalStorage, loadLastSearchesFromLocalStorage };