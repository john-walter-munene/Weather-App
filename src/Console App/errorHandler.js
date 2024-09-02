import { removeLoadingComponent } from "../Frontend/loadingComponent";

const weatherApplication = document.querySelector('.weather-app');

function handleGetWeatherError(error) {
    console.log(error);

    // Notify user about error.
    const loadingComponent = document.querySelector('.loading-component');
    loadingComponent.textContent = '';
    loadingComponent.textContent = 'Ooops, failed to fetch. Please check your connection and try again';

    // Check if error is a SyntaxError and contains specific text
     if ((error instanceof SyntaxError) && error.message.includes('Bad API ')) {
        loadingComponent.textContent = '';
        loadingComponent.textContent = 'Ooops! Your Location is unavailable. Please enter a valid location!';
    }

    //Remove notification after 4 seconds and load home page.
    setTimeout( () => {
        removeLoadingComponent()
    }, 3000);
}

function handleGetGifError(error) {
    console.log(error);
    const gifHolder = document.querySelector('.weather-gif');
    weatherApplication.removeChild(gifHolder);
}   

export { handleGetWeatherError, handleGetGifError, };