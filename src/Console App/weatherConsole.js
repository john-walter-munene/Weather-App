async function getAppropriateWeatherGif(weatherCondition) {
    // const userInput = imageSearcherInput.value;
    try {
        const weatherGifResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=cdV83dbgRL2VFc2iNoBozLAQFezGJQY6&q=${weatherCondition}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
            { mode: 'cors'});
        const weatherGifResponseData = await weatherGifResponse.json();
        if (weatherGifResponseData.data && weatherGifResponseData.data.length > 0) {
            // Return GIF url.
            return weatherGifResponseData.data[0].images.original.url;
        } else throw new Error("Gif not found!")
    } catch(error) {
        console.log(error);
        alert(error);
    }
}

// getAppropriateWeatherGif('sunny');

async function getWeatherData(location) {
    try {
        const weatherResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=VCS46D95CZEECUCCK4GBF554A&contentType=json`, 
            { mode: 'cors'});

        const weatherData = await weatherResponse.json();
        if (weatherData) console.log("Data available");
        const weatherGif = await getAppropriateWeatherGif(weatherData.days[0].conditions);
        if (weatherGif ) weatherData.days[0].icon = weatherGif;

        return weatherData;
    } catch(error) {
        console.log(error);
        alert(error);
    }
}

function createWeatherObject(weatherData) {
    
    // console.log("called from weather Obj", weatherData);

    let temperature = weatherData.days[0].temp;
    let weatherCondition = weatherData.days[0].conditions;
    let WeatherDescription = weatherData.days[0].description;
    let weatherIcon = weatherData.days[0].icon;
    let forecast = weatherData.description;
    let humidity = weatherData.days[0].humidity;
    let latitude = weatherData.latitude;
    let longitude = weatherData.longitude;
    let resolvedLocationName = weatherData.resolvedAddress;

    return { 
        temperature,
        weatherCondition,
        WeatherDescription,
        weatherIcon,
        forecast,
        humidity,
        latitude,
        longitude,
        resolvedLocationName,
    };
}

const weatherSearches = [];

getWeatherData('houston').then(data => createWeatherObject(data)).then(data => {
    for (let dataItem in data) {
        console.log(dataItem, ": ",data[dataItem]);
    }
});