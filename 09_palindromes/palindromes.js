const palindromes = function (str) {
  str = str.toLowerCase().replace(/[^a-z0-p]/g, '');
  const reverseStr = str.toLowerCase().split('').reverse().join('');
  if (str === reverseStr) {
    return true;
  } {return false;}
};

// Do not edit below this line
module.exports = palindromes;
