const reverseString = function(text) {
  const myArray = text.split("");
  myArray.reverse();
  return myArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
