// import _ from 'lodash';
import "./resources/styless.css";
import "./Frontend/weatherUI.js";
import { loadLastSearchesFromLocalStorage } from "./Console App/storage";
import { updateAppDayDateTime } from "./resources/utility";
import { updateLatestSearches, weatherSearchesStore } from "./Frontend/weatherUI";

function initializePage() {
 
  updateAppDayDateTime();
  // Load latest searches from board and update display.
  const latestSearchesDisplay = document.querySelector(".last-searches");
  latestSearchesDisplay.textContent = "";
  loadLastSearchesFromLocalStorage(weatherSearchesStore);
  updateLatestSearches()
  console.log("loaded");
}

// Call initializePage when the DOM is fully loaded
addEventListener("DOMContentLoaded", initializePage());