function limitToTwoWords(inputString) {
    const words = inputString.split(' ');
    const limitedString = words.slice(0, 2).join(' ');
    return limitedString;
  }

// console.log(limitToTwoWords('Munene, Popokabaka, Kwango, République Démocratique du Congo'))

export { limitToTwoWords };