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

export { limitToTwoWords, getDayDateAndTime, celsiusToFahrenheit };