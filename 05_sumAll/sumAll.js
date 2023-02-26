const sumAll = function(a, b) {
   if (a < 0 || typeof a !== 'number' || b < 0 || typeof b !== 'number') {
    return "ERROR"; 
} else if (a > b) {
  [a, b] = [b, a];
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
 } else if (a < b) {
 let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
};

// Do not edit below this line
module.exports = sumAll;
