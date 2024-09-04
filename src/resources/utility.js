import { format } from "date-fns";

function limitToTwoWords(inputString) {
    const words = inputString.split(' ');
    const limitedString = words.slice(0, 2).join(' ');
    return limitedString;
  }

function getDayDateAndTime() {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEEE, MMM d, yyyy, h:mm a');
    return formattedDate;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}

function updateAppDayDateTime() {
   // Update app with latest time on load.
   const weatherSearchIdentifier = document.querySelector(".identifier");
   const splitDefaultIdentifierText = weatherSearchIdentifier.textContent.split(', ');
   const updatedIdentifierText = `${splitDefaultIdentifierText[0]} ${getDayDateAndTime()}`;
   weatherSearchIdentifier.textContent = '';
   weatherSearchIdentifier.textContent = updatedIdentifierText;
}

export { limitToTwoWords, getDayDateAndTime, celsiusToFahrenheit, updateAppDayDateTime };