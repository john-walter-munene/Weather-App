import { handleGetWeatherError, handleGetGifError } from "./errorHandler";

async function getWeatherData(location) {
    try {
        const weatherResponse = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=VCS46D95CZEECUCCK4GBF554A&contentType=json`, 
            { mode: 'cors' }
        );

        const weatherData = await weatherResponse.json();
        if (weatherData) return weatherData;
    } catch (error) {
        handleGetWeatherError(error);
    }
}

async function getAppropriateWeatherGif(weatherData) {
    if (weatherData === undefined) { console.log("No data for GIF"); return };
    // Get weather condition from weather data object.
    const weatherCondition = weatherData.days[0].conditions;

    try {
        const weatherGifResponse = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=cdV83dbgRL2VFc2iNoBozLAQFezGJQY6&q=${weatherCondition}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
            { mode: 'cors' }
        );

        const weatherGifResponseData = await weatherGifResponse.json();
        if (weatherGifResponseData.data && weatherGifResponseData.data.length > 0) {
            // Update URL in Weather object.
            const gifURL = weatherGifResponseData.data[0].images.original.url;
            if (gifURL) {
                weatherData.days[0].icon = gifURL;
                return weatherData;
            }
        } else {
            throw new Error("Gif not found!");
        }
    } catch (error) {
        handleGetGifError(error);
    }
}


function createWeatherObject(weatherData) {
    if (weatherData === undefined) { console.log("No data for Object"); return };

    let temperature = weatherData.days[0].temp;
    let weatherForecast = weatherData.days[0].conditions
    let WeatherDescription = weatherData.days[0].description;
    let weatherSummary = weatherData.description;
    let weatherIcon = weatherData.days[0].icon;
    let humidity = weatherData.days[0].humidity;
    let latitude = weatherData.latitude;
    let longitude = weatherData.longitude;
    let resolvedLocationName = weatherData.resolvedAddress;
    let windSpeed = weatherData.days[0].windspeed;

    return { 
        temperature,
        weatherForecast,
        WeatherDescription,
        weatherSummary,
        weatherIcon,
        humidity,
        latitude,
        longitude,
        resolvedLocationName,
        windSpeed,
    }
}

export { getWeatherData, getAppropriateWeatherGif, createWeatherObject, };